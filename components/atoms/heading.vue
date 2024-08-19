<script lang="ts">
import type { PropType } from "vue";

const headingList = ["h1", "h2", "h3", "h4", "h5", "h6"] as const;
type headingType = (typeof headingList)[number];

export default {
  props: {
    type: { type: String as PropType<headingType>, default: "h1" },
    href: String,
    to: String,
    icon: String,
    loading: Boolean,
  },
  setup(props, { attrs, slots, emit, expose }) {
    const router = useRouter();

    const $local = reactive({
      h1: ["text-5xl xl:text-6xl"],
      h2: ["!text-4xl xl:text-5xl"],
      h3: ["!text-3xl xl:text-4xl"],
      h4: ["!text-2xl xl:text-3xl"],
      h5: ["!text-xl xl:text-2xl"],
      h6: ["!text-lg xl:text-xl"],
    });

    const $trigger = () => {
      if (props.href) {
        window.open(props.href, "_blank");
      } else if (props.to) {
        router.push({ path: props.to });
      }
    };

    const $isClickable = computed(
      () => props.href || props.to || attrs?.onClick || false
    );

    return () =>
      h(
        props.type,
        {
          onClick: $trigger,
          class: [
            ...$local[props.type],
            "font-bold !leading-tight",
            attrs.class,
          ],
          style: {
            "text-decoration": $isClickable.value ? "underline" : "none",
            cursor: $isClickable.value ? "pointer" : "inherit",
          },
        },
        { default: () => slots ?? "This is Heading" }
      );
  },
};
</script>
