<script lang="ts">
import type { PropType } from "vue";

const defaultText = "p";
const textList = [defaultText, "span"] as const;
type textType = (typeof textList)[number];

export default {
  props: {
    type: { type: String as PropType<textType>, default: defaultText },
    download: String,
    href: String,
    to: String,
    loading: Boolean,
    strong: Boolean,
    italic: Boolean,
  },
  setup(props, { attrs, slots, emit, expose }) {
    const router = useRouter();

    const $local = reactive({
      default: [
        "!leading-tight text-color",
        props.strong ? "font-bold" : "",
        props.italic ? "italic" : "",
      ],
      p: ["text-base"],
      span: ["text-sm"],
    });

    const $trigger = () => {
      if (props.href && props.download) {
        let link = document.createElement("a");
        link.href = props.href;
        link.download =
          props.download ??
          `file-${new Date().getTime()}.${
            props.href?.split(";")?.[0]?.split("/")?.[1]
          }`;
        link.click();
      } else if (props.href) {
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
          class: [...$local[props.type], "line-height-2", attrs.class],
          style: {
            "text-decoration": $isClickable.value ? "underline" : "none",
            cursor: $isClickable.value ? "pointer" : "inherit",
          },
        },
        { default: () => slots ?? "This is Text" }
      );
  },
};
</script>
