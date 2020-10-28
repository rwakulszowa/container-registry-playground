<template>
  <div class="henlo">
    <h1>{{ clientMessage }}</h1>
    <h1>{{ serverMessage }}</h1>
  </div>
</template>

<script>
// Helper function pausing the current promise chain.
async function sleep(milliseconds) {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve();
    }, milliseconds);
  });
}

export default {
  name: "Henlo",
  props: {
    // This message is injected by the parent component.
    clientMessage: String
  },
  // This field defines dynamic properties of a component.
  // https://v3.vuejs.org/guide/data-methods.html#data-properties
  data() {
    return {
      // This message is fetched from the server.
      serverMessage: null
    };
  },
  // This function gets invoked when a component is created:
  // https://v3.vuejs.org/guide/instance.html#lifecycle-hooks
  async created() {
    // Fetch a message, updating the component's state on every step.
    // Sleeps here and there to make transitions clear.
    try {
      this.serverMessage = "sending a request...";

      await sleep(1000);

      // Refer to the docker-compose name of the service.
      // Using "localhost" would not work, as each container defines its own "localhost".
      const response = await fetch("http://localhost:3000");
      console.log(`Got a response: ${JSON.stringify(response)}`);
      this.serverMessage = "decoding...";

      await sleep(1000);

      const text = await response.text();
      this.serverMessage = text;
    } catch (err) {
      this.serverMessage = `Fetch failed: ${err}`;
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
</style>
