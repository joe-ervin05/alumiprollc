<script>

	import { fullName, shortName } from "$lib/config/context.config";

</script>
<footer class="p-4 md:p-8">
    <div class="mx-auto max-w-screen-xl text-center">
      <span class="theme-h3">{shortName}</span>
      <ul
        class="flex flex-wrap justify-center items-center my-3 theme-p"
      >
        <li>
          <a href="/book" class="hover:underline mr-6 mb-6">Book</a>
        </li>
        <li>
          <a href="/privacy" class="hover:underline mr-6 mb-6">Privacy Policy</a>
        </li>
        <li>
          <a href="/terms" class="hover:underline mr-6 mb-6"> Terms of Service</a>
        </li>
      </ul>
      <span class="!text-sm sm:text-center theme-p"
        >&copy; 2024 <a href="/" class="hover:underline theme-p">{fullName}</a>. All Rights
        Reserved.</span
      >
    </div>
  </footer>

  <style>

    footer {
        border-top: 1px solid var(--color-bg-200);
    }

  </style>