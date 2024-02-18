import { component$ } from "@builder.io/qwik"
import { type DocumentHead } from "@builder.io/qwik-city"

export default component$(() => {
  return (
    <div class="flex flex-col gap-5 tracking-tight max-w-[650px]">
      <h2 class="text-4xl font-bold tracking-wide">Introduction</h2>
      <p class="text-lg -mt-4 text-gray-400 tracking-tight">
        Beautifully designed components that you can copy and paste into your
        apps. Accessible. Customizable. Open Source.
      </p>
      <p class="tracking-tight">
        This is <strong>NOT</strong> a component library. It's a collection of
        re-usable components that you can copy and paste into your apps.
      </p>
      <h5 class="font-bold">What do you mean by not a component library?</h5>
      <p>
        I mean you do not install it as a dependency. It is not available or
        distributed via npm.
      </p>
      <p>
        Pick the components you need. Copy and paste the code into your project
        and customize to your needs. The code is yours.
      </p>
      <p class="italic">
        Use this as a reference to build your own component libraries.
      </p>
    </div>
  )
})

export const head: DocumentHead = {
  title: "Documentation",
  meta: [
    {
      name: "description",
      content: "Qwik UI Custom site description",
    },
  ],
}
