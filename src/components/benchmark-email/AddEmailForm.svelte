<script lang="ts">
  import Button from "../shared/Button.svelte";

  export let className!: string;

  let isLoading: boolean = false;
  let statusCode: number;

  async function submit(e: SubmitEvent) {
    e.preventDefault();

    const formData = new FormData(e.currentTarget as HTMLFormElement);

    isLoading = true;

    const response = await fetch("/api/emails", {
      method: "POST",
      body: formData,
    });

    statusCode = await response.status;

    if (statusCode) {
      isLoading = false;
    }
  }

  let toBounce: boolean = true;

  function toggleBounce(event: any) {
    if (!toBounce && event.target.value !== "") return;

    toBounce = !toBounce;
  }
</script>

<form
  class={`py-1 pl-6 pr-1 flex gap-3 items-center text-heading-3 shadow-lg shadow-box-shadow
border border-box-border bg-box-bg rounded-full ease-linear focus-within:bg-body focus-within:border-primary ${
    toBounce ? "animate-bounce duration-800" : ""
  } ${className}`}
  on:submit={submit}
>
  <span class="min-w-max pr-2 border-r border-box-border">
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="20"
      fill="none"
      viewBox="0 0 24 24"
      stroke-width="1.5"
      stroke="currentColor"
      class="w-5 h-5"
    >
      <path
        stroke-linecap="round"
        stroke-linejoin="round"
        d="M21.75 9v.906a2.25 2.25 0 01-1.183 1.981l-6.478 3.488M2.25 9v.906a2.25 2.25 0 001.183 1.981l6.478 3.488m8.839 2.51l-4.66-2.51m0 0l-1.023-.55a2.25 2.25 0 00-2.134 0l-1.022.55m0 0l-4.661 2.51m16.5 1.615a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V8.844a2.25 2.25 0 011.183-1.98l7.5-4.04a2.25 2.25 0 012.134 0l7.5 4.04a2.25 2.25 0 011.183 1.98V19.5z"
      ></path>
    </svg>
  </span>

  <input
    type="email"
    name="email"
    placeholder="your@email.com"
    class="w-full py-3 outline-none bg-transparent"
    on:focus={toggleBounce}
    on:blur={toggleBounce}
    required
  />

  <input type="hidden" name="error" value="0" />

  <Button variant={"primary"} className={"min-w-max text-white"}>
    <span class="hidden sm:flex relative z-[5]"> Wow! Notify me!</span>
    <span class="flex sm:hidden relative z-[5]">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke-width="1.5"
        stroke="currentColor"
        class="w-5 h-5"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          d="M6 12L3.269 3.126A59.768 59.768 0 0121.485 12 59.77 59.77 0 013.27 20.876L5.999 12zm0 0h7.5"
        ></path>
      </svg>
    </span>
  </Button>
</form>

<div class="flex justify-center mt-2" role="status">
  {#if isLoading}
    <svg
      aria-hidden="true"
      class="w-8 h-8 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600"
      viewBox="0 0 100 101"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
        fill="currentColor"
      />
      <path
        d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
        fill="currentFill"
      />
    </svg>
  {:else if statusCode && statusCode == 200}
    <p class="text-green-500 font-bold sm:font-sm">
      Thanks! We will keep you updated ;&#41;
    </p>
  {:else if statusCode && statusCode != 200}
    <p class="text-red-500 font-bold">
      An error ocurred while saving your email...
    </p>
  {/if}
</div>
