import { component$ } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";
import { IoLogoGithub } from "@qwikest/icons/ionicons";

import Button from "~/components/ui/button";

export default component$(() => {
  return (
    <main class="p-6">
      <div class="flex w-full py-24 flex-col gap-5 items-center justify-center">
        <h2 class="text-2xl sm:text-6xl font-bold text-center ">
          Build your component library
        </h2>
        <p class="text-sm sm:text-xl text-gray-400 max-w-[750px] text-center">
          Beautifully designed components that you can copy and paste into your
          apps. Accessible. Customizable. Open Source.
        </p>
        <div class="flex gap-6">
          <Button>Get Started</Button>
          <Button variant="outline">
            <IoLogoGithub font-size={20} class='mr-2 mb-1' />
            Github
          </Button>
        </div>
      </div>
    </main>
  );
});

export const head: DocumentHead = {
  title: "Custom UI Qwik",
  meta: [
    {
      name: "description",
      content: "Qwik UI Custom site description",
    },
  ],
};
