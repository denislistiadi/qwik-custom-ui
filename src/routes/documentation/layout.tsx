import { Slot, component$ } from "@builder.io/qwik"
import { useLocation } from "@builder.io/qwik-city"
import { LuChevronRight } from "@qwikest/icons/lucide"

import Sidebar from "~/components/sidebar"

export default component$(() => {
  const param = useLocation()
  const crumbsArray = param.url.pathname
    .split("/")
    .filter((item) => item !== "")
  console.log(crumbsArray)
  return (
    <div class="grid grid-cols-[220px_minmax(0,1fr)] gap-4 p-10">
      <Sidebar />
      <div>
        {/* BREADCRUMBS */}
        <div class="flex mb-4 gap-1 items-center text-sm text-gray-400">
          {crumbsArray.map((item, idx) => (
            <div key={idx} class="capitalize flex items-center">
              {idx > 0 && <LuChevronRight font-size={16} class="mr-1" />}{" "}
              <span class={idx + 1 === crumbsArray.length && "text-primary"}>
                {item}
              </span>
            </div>
          ))}
        </div>
        <Slot />
      </div>
    </div>
  )
})
