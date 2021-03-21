<template>
  <div>

    <h1 class="underline mb-2 mt-2"></h1>

    <div class="parallax">
      <div class="col-md-4">
        <div class="caption">
          <br/><br/>
          <h2 >{{dev}} @ {{year}}</h2>
          <h4 class="mb-5">Bijaklah dalam menyebarkan informasi digital</h4>
          <br/>
          Contact:       
          <a :href="`https://wa.me/${contact.phone}?text=${contact.text}`" class="btn btn-primary text-white mb-3" target="_blank">
            Whatsapp
          </a>
        </div>  
      </div>
    </div>
  </div>
</template>

<script>
  export default{
    data() {
      return {
        dev: 'Puji Ermanto',
        year: new Date().getFullYear(),
        contact: {
          phone: '6288222668778',
          text: 'Hai ... %20kak%20saya%20Ada%20Project%20untuk%20kaka'
        }
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
  width: 350px;
  height: 500px;
  border-radius: 5px;
  box-shadow: 0 2px 30px rgba(black, .2);
  background: lighten(#f0f4c3, 10%);
  position: relative;
  overflow: hidden;
  transform: translate3d(0, 0, 0);
}

.wave {
  opacity: .4;
  position: absolute;
  top: 3%;
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
  z-index: -1;
  transform: translate3d(0, 0, 0);
}

.title-wave {
  position: absolute;
  left: 1rem;
  top: 0;
  width: 100%;
  z-index: 1;
  line-height: 300px;
  text-align: left;
  transform: translate3d(0, 0, 0);
  color: white;
  font-weight: bold;;
  text-transform: uppercase;
  font-family: 'Poiret One', cursive;
  letter-spacing: .4em;
  font-size: 14px;
  text-shadow: 0 1px 0 rgba(black, .1);
}
.titl-wave a{
  margin-left: 2rem;
}

@keyframes drift {
  from { transform: rotate(0deg); }
  from { transform: rotate(360deg); }
}

.caption {
  background:rgba(255,255,255,0.4);
  /* clip-path: polygon(25% 0%, 100% 0%, 75% 100%, 0% 100%); */
  position: absolute;
  left: 25rem;
  margin-top: 7rem;
  width: 100%;
  text-align: center;
  color: #000;
}
.caption h2 {
  color: white;
  font-family: 'Poiret One', cursive;font-weight:bold;
  text-shadow: 0 3px 20px rgba(0, 0, 0, 0.5);
  margin-bottom: .9rem;
}
.caption a{
  font-size: 18px;
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