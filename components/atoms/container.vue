<script lang="ts">
export default {
  props: {
    fluid: Boolean,
  },
  setup(props, { attrs, slots, emit, expose }) {
    const router = useRouter();

    return () =>
      h(
        "div",
        {
          class: "px-5 md:px-auto md:container mx-auto",
        },
        { default: () => slots }
      );
  },
};
</script>
