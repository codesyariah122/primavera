<template>
  <div>
    <slot />
    <h1>{{title}}</h1>
    <img src="../../../assets/About/parallax2.jpg" alt="">
    <h1><u>About</u></h1>
    <p>
      Hai ... <br>
      Sejak kapan inovasi dimulai ? <br>
      Saya merasa bahwasanya dunia ini berinovasi begitu cepat seperti sebuah lembing yang terlempar di udara, meninggalkan jangkauan demi jangkauan. <br>
      Dekade ini menurut saya adalah sebuah masa dimana denyut informasi dan teknologi dalam fase yang sangat gencar merambat, menggantikan kabel-kabel tembaga penghantar arus, kini arus sudah bermutasi dalam teknologi nano. <br>
      Tidak ada yang dapat memungkiri teknologi menjadi urat nadi perekonomian dunia akhir-akhir ini, mungkin akhir bukanlah segalanya dalam ranah teknologi, bahwasanya inovasi adalah jantung bagi penggerak otot kehidupan masyarakat modern kini.
    </p>
  </div>
</template>

<style lang="scss" scoped>
   img {
    width: 100%;
    height: auto;
    margin-bottom: 32px;
  }

  p {
    margin: 0;
    padding: 0;
    font-size: 1.8rem;
    line-height: 1.5em;
    text-align: justify;
    margin-bottom: 2rem;
  }
</style>