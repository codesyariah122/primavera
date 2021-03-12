<template>
  <div>
    
    <h1 class="underline mb-2 mt-2"></h1>

    <div class="parallax">
        <div class="col-md-4">
            <div class='box-wave'>
              <div class='wave -one'></div>
              <div class='wave -two'></div>
              <div class='wave -three'></div>
              <div class='title-wave'>
                <h4>
                  Puji Ermanto @ {{date}}
                </h4>
              </div>
            </div>
        </div>
    </div>
  </div>
</template>

<script>
  export default{
    data() {
      return {
        date: new Date().getFullYear()
      }
    }

  }
</script>

<style lang="scss" scoped>
.underline:after {
  content: "";
  display: block;
  margin: auto;
  position: relative;
  margin-bottom: 2rem;
  margin-top: 0.8rem;
  width: 100px;
  height: 2px;
  background: #ff634e;
}
 .parallax{
    background-image: url('~@/assets/Home/parallax2.jpg');
    min-height: 500px; 
    background-attachment: fixed;
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    margin:0;
  }
    /* wave */
.box-wave {
  width: 300px;
  height: 300px;
  border-radius: 2px;
  box-shadow: 0 2px 30px rgba(black, .2);
  background: lighten(#f0f4c3, 15%);
  position: relative;
  overflow: hidden;
  transform: translate3d(0, 0, 0);
  opacity: 0.9;
}
    
.wave {
  opacity: .4;
  position: absolute;
  top: 10%;
  left: 50%;
  background: #0af;
  width: 500px;
  height: 500px;
  margin-left: -250px;
  margin-top: -250px;
  transform-origin: 50% 48%;
  border-radius: 43%;
  animation: drift 3000ms infinite linear;
}
    
.wave.-three {
  animation: drift 5000ms infinite linear;
}
    
.wave.-two {
  animation: drift 7000ms infinite linear;
  opacity: .1;
  background: yellow;
}
    
.box-wave:after {
  content: '';
  display: block;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(to bottom, rgba(#e8a, 1), rgba(#def, 0) 80%, rgba(white, .5));
  z-index: 11;
  transform: translate3d(0, 0, 0);
}
    
.title-wave {
  position: absolute;
  left: 0;
  top: 55px;
  width: 100%;
  z-index: 1;
  line-height: 300px;
  text-align: center;
  transform: translate3d(0, 0, 0);
  color: white;
  text-transform: uppercase;
  font-family: 'Playfair Display', serif;
  letter-spacing: .4em;
  font-size: 24px;
  text-shadow: 0 1px 0 rgba(black, .1);
  text-indent: .3em;
    }
    .title-wave a{
        margin-left: 2rem;
    }
  
  @keyframes drift {
    from { transform: rotate(0deg); }
    from { transform: rotate(360deg); }
  }
 @media only screen and (max-device-width: 812px) {
    .parallax {
        background-attachment: scroll;
    }
    .waves {
        height: 40px;
        min-height: 40px;
    }
  }

</style>