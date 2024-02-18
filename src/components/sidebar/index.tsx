import { component$ } from "@builder.io/qwik"
import { data } from "./list-nav"

export default component$(() => {
  return (
    <aside class="sticky flex flex-col text-sm gap-2">
      <h4 class="font-semibold">Components</h4>
      <div class="flex flex-col gap-1.5 text-gray-400 font-normal ">
        {data.map((item, idx) => (
          <a key={idx} class="hover:underline" href={item.url}>
            {item.name}
          </a>
        ))}
      </div>
    </aside>
  )
})
