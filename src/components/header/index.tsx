import { component$, useSignal } from "@builder.io/qwik"
import { LuSearch } from "@qwikest/icons/lucide"
import Input from "../ui/input"
import { useLocation } from "@builder.io/qwik-city"

interface NavBarProps {
  name: string
  url: string
}

const NavBar = component$<NavBarProps>(({ name, url }) => {
  const param = useLocation()
  const active =
    param.url.pathname.replaceAll("/", "") === url.replaceAll("/", "")
  return (
    <li
      class={`cursor-pointer hover:text-gray-700 hover:font-medium ${active ? "text-gray-700 font-medium" : ""}`}
    >
      <a href={url}>{name}</a>
    </li>
  )
})

export default component$(() => {
  const search = useSignal("")
  return (
    <div class="border-b px-10 py-2.5 shadow-sm backdrop-blur sticky top-0 w-full flex gap-5 justify-between">
      <div class="flex gap-5 items-center">
        <a href="/">
          <h1 class="font-bold text-lg text-gray-800 hover:opacity-80">
            Custom UI
          </h1>
        </a>
        <ul class="flex gap-3 items-center text-sm text-gray-400">
          <NavBar name="Docs" url="/documentation" />
          <NavBar name="About" url="/about" />
          <NavBar name="Example" url="/example" />
        </ul>
      </div>
      <div class="relative hidden sm:block">
        <Input
          customClass="pr-10 tracking-wide"
          placeholder="Search documentation..."
          value={search}
        />
        <LuSearch
          class="absolute right-2 top-2.5 text-gray-400"
          font-size={18}
        />
      </div>
    </div>
  )
})
