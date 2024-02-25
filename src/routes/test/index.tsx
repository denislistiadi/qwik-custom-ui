import { component$ } from "@builder.io/qwik"
import { routeLoader$ } from "@builder.io/qwik-city"

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

export default component$(() => {
  const data = useGetData()
  return (
    <div>
      {data.value.map((item: ItemProps) => (
        <p key={item.id}>{item.title}</p>
      ))}
    </div>
  )
})
