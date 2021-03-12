<template>
  <div>
    <slot />
    <h1>Innovation ... why ? </h1>
    <img src="../assets/mood.jpg" alt="">
    <p>
      Entah mengapa orang-orang begitu berhasrat menetaskan pembaharuan, apa yang mereka inginkan dari pembaharuan yang mereka ciptakan :  
      <details>
      <summary>
        Click
      </summary>
        <ul>
          <li>Omong kosong</li>
          <li>Kebohongan</li>
          <li>Kelicikan</li>
        </ul>
        Yang mana yang engkau persembahkan ... ?
      </details>

      Tapi dari setiap pilihan mungkin ada sisi baiknya, manakala hati manusia masih terbuka sebagai fitrahnya. Bukan sebuah alasan juga untuk tidak berkarya dan mengejar innovasi toh, ada baiknya semua perencanaan itu di rencanakan untuk kebaikan.
    </p>
  </div>
</template>

<script>
  export default {
    metaInfo: {
      title: "AboutPage | Primavera"
    }
  }
</script>

<style lang="scss" scoped>
   img {
    width: 100%;
    max-width: 600px;
    height: auto;
    margin-bottom: 32px;
  }

  p {
    text-indent: 31px;
    margin: 0;
    padding: 0;
    font-size: 1.8rem;
    line-height: 1.5em;
  }
</style>