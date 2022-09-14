<template>
  <div class="story-section">
    <div class="text-box" id="text-1">
      <h2>SHARE YOUR THOUGHTS.</h2>
      <textarea name="" id="" cols="35" rows="10" placeholder="One of the most prized capabilities, evolutionary assets, and primal urges of humanity/humankind is the possibility to express the most urgent needs, the deepest desires, the most complex ideas, and the innermost fears. The Internet is the culmination of this desire to communicate with the rest of us, speak, and be heard.
      
If you had the chance to say something here, what should it be?"></textarea>
    </div>
    <div class="text-box" id="text-2">
      <h2>WITH STYLE AND GRACE.</h2>
      <div>
          <div class="harmony" ref="harmony" >
          <p id="harmony-1">Harmony.</p>
          <p id="harmony-2">Harmony.</p>
          <!-- <p id="harmony-on-hover">Harmony.</p> -->
          </div>
          <p id="hiearachy" ref="hiearachy">Hierarchy.</p>
          <p>Forms and shapes.</p>
          <p @mouseenter="addSize" @mouseleave="removeSize" ref="sizeMatters">Sometimes size does matter.</p>
          <p>Animate, because you can,</p>
          <p>and don't forget the colours.</p>
          <br>
          <p>Speak before even saying anything.</p>
      </div>
  
        
         <!-- Style.     -->
        <!-- A harmonius unity of forms and shapes, all in a single hierarchy for a purpose: to catch attention. It's like the seasoning on a fine meal, too much can be just as bad, as too little. -->
        <!-- Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nam ipsum
        doloremque facilis nesciunt accusantium nostrum inventore atque sint,
        error dolor, quisquam maiores sapiente! Deserunt, facere! -->
    </div>
    <div class="text-box" id="text-3">
      <h2>MAKE IT WORK FOR YOU.</h2>
      <p>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quia similique
        optio itaque laudantium perspiciatis provident ipsam saepe nemo atque
        tempore, commodi mollitia explicabo, rem est debitis.
      </p>
    </div>
  </div>
</template>

<script>
// section-unit
export default {
  methods: {
    addDiffFont() {
      // this.$refs.harmony.style.fontFamily = "Arial, Helvetica, sans-serif"
      this.$refs.harmony.classList.add('newfont')
      // this.$refs.harmony.classList.remove('harmony')

      // console.log(this.$refs.harmony)
      // console.log(document.querySelector('.harmony'))
    },
    removeSize() {
      this.$refs.sizeMatters.classList.remove('size-matters')
    }
  }
};
</script>

<style scoped>
textarea {
  font-family: 'Times New Roman', Times, serif;
    font-size: 1rem;
    color: white;
    background-color: black;
    border: hidden;
    resize: none;
}
textarea::placeholder {
    color: white;
}
/* textarea::-webkit-resizer {
  display: none;

} */
.story-section {
  width: 100vw;
  height: 100vh;
  background-color: black;
  position: relative;
}
.text-box {
    font-size: 1rem;
    position: absolute;
    width: 300px;
}
#text-1 {
    top: 10%;
    right: 10%;
}
#text-2 {
    top: 40%;
    left: 10%;
}
#text-3 {
    top: 70%;
    right: 10%;
}
/* individuals */
.harmony {
    transition: all 2s ease;
    position: relative;
}
#harmony-1{
  opacity: 1;
  color: blue;
}
#harmony-2{
  position: absolute;
  top: 0;
  left: 0;
  opacity: 0;
  font-family: Cambria, Cochin, Georgia, Times, 'Times New Roman', serif;
  color: red;
    transition: all 2s ease;

}
#harmony-1:hover {
  opacity: 0;
}
#harmony-2:hover {
  opacity: 1;
}

.newfont {
    /* font-family: Impact, Haettenschweiler, 'Arial Narrow Bold', sans-serif !important; */
    font-size: 8rem;
}
</style>