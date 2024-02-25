import { $, component$, useSignal } from "@builder.io/qwik"
import { routeAction$, routeLoader$ } from "@builder.io/qwik-city"

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
  // const action = usePostData()

  const title = useSignal("")
  const image = useSignal("")
  const desc = useSignal("")

  const onSubmit = $(async (e: any) => {
    e.preventDefault()
    const resp = await fetch(
      "https://65be164adcfcce42a6f1d0f8.mockapi.io/posts",
      {
        method: "POST",
        headers: { "content-type": "application/json" },
        // Send your data in the request body as JSON
        body: JSON.stringify({
          title: title.value,
          image: image.value,
          desc: desc.value,
        }),
      }
    )
    const obj = await resp.json()
    return obj
  })
  return (
    <div>
      <form>
        <input bind:value={title} placeholder="title" type="text" />
        <input bind:value={image} placeholder="image" type="text" />
        <input bind:value={desc} placeholder="desc" type="text" />
        <button onClick$={onSubmit}>Add user</button>
      </form>
      {data.value.map((item: ItemProps) => (
        <p key={item.id}>{item.title}</p>
      ))}
    </div>
  )
})
