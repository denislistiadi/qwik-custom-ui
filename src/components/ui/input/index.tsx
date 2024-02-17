import { CSSProperties, component$ } from "@builder.io/qwik";
import { cn } from "~/lib/utils";

export interface IndexProps {
  customClass?: string;
  id?: string;
  label?: string;
  name?: string;
  onBlur?: (e: Event) => void;
  onChange?: (e: Event) => void;
  placeholder?: string;
  style?: CSSProperties;
  type?: string;
  value?: any;
}

export default component$<IndexProps>(
  ({ customClass, value, type, ...props }) => {
    return (
      <input
        type={type}
        class={cn(
          "flex h-9 w-full rounded-md border border-input bg-transparent px-3 py-1 text-sm shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50",
          customClass
        )}
        bind:value={value}
        {...props}
      />
    );
  }
);
