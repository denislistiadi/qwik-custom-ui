import { component$ } from "@builder.io/qwik"
import { Form, routeAction$, routeLoader$ } from "@builder.io/qwik-city"

interface ItemProps {
  id?: number
  title: string
  image: string
  desc: string
}

export const useGetData = routeLoader$(async () => {
  const resp = await fetch("https://65be164adcfcce42a6f1d0f8.mockapi.io/posts")
  const data = await resp.json()
  return data
})

export const usePostData = routeAction$(async (data) => {
  const resp = await fetch(
    "https://65be164adcfcce42a6f1d0f8.mockapi.io/posts",
    {
      method: "POST",
      headers: { "content-type": "application/json" },
      // Send your data in the request body as JSON
      body: JSON.stringify(data),
    }
  )
  const obj = await resp.json()
  return obj
})

export default component$(() => {
  const data = useGetData()
  const action = usePostData()
  return (
    <div>
      <Form action={action}>
        <input name="title" placeholder="title" />
        <input name="image" placeholder="image" />
        <input name="desc" placeholder="desc" />
        <button type="submit">Add user</button>
      </Form>
      {data.value.map((item: ItemProps) => (
        <p key={item.id}>{item.title}</p>
      ))}
    </div>
  )
})
