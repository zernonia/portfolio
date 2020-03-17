<template>
  <div class=" bg-gray-300 relative container min-h-screen flex-row justify-center align-middle m-0 p-4 sm:p-8 min-w-full md:p-12 ">
    <div class="md:flex align-middle items-center ">
      <div class=" flex justify-between content-center md:w-1/3 md:flex-row flex-wrap md:p-8">
        <h1 class=" z-10 text-white font-extrabold tracking-wider mt-2 uppercase text-4xl ml-6 md:text-4xl md:ml-0 leading-none"><span class=" text-gray-500">Zern</span>onia</h1>
        <a href="/blog" class=" z-10 text-sm uppercase outline-none tracking-widest font-bold px-4 py-1 mt-2 bg-gray-800 text-white rounded-lg hover:bg-gray-600 sm:px-6 sm:py-2 self-center md:mt-4">Blog</a>
      </div>
      <div>
        <div class="init"><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span></div>
      </div>
            <!-- hero image -->
      <div class=" z-10 px-4 py-4 pb-6 bg-white rounded-xl md:w-2/3 mt-4"> 
        <img src="~/static/img/zern.jpeg" alt="zern portfolio" class=" z-10 shadow-lg rounded-xl object-cover">
        <h3 class=" ml-3 absolute text-white mt-2 text-2xl font-extrabold uppercase leading-none md:text-3xl md:ml-6"><span class="text-gray-500">Personal Portfolio</span><br> & Dev Blog</h3> 
      </div>
    </div>
    <div class="mt-16 ">
      <div class="  mt-4 flex align-middle items-center justify-center">
        <!-- name card -->
        <div class="md:mr-8 mr-4 w-64 md:w-80 shadow-lg rounded-xl bg-white  flex justify-center align-middle content-center px-4 py-4">
          <img src="~/static/img/face.jpeg" alt="zernonia" class=" w-16 h-16 rounded-xl object-cover object-top">
          <div class="ml-4 relative">
            <h2 class="text-gray-900 font-bold tracking-wide md:text-lg">Kong Eu Zern</h2>
            <p class=" mt-1 leading-tight font-semibold text-xs text-gray-800 md:text-sm">Full time Christian. Loves worship songs</p>
            <div class=" absolute flex justify-center align-middle mt-2">
              <button class=" btn bg-gray-800">Open</button>
              <button class=" btn bg-gray-400 ml-2">Cancel</button>
            </div>
          </div>
        </div>
        <!-- cross -->
        <div class="">
          <div class=" p-4 rounded-full bg-white shadow-lg " >
            <svg class="md:w-12 md:h-12 w-8 h-8 fill-current text-gray-700" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="m406.625 120.5h-105.5v-105.5c0-8.284-6.716-15-15-15h-60.25c-8.284 0-15 6.716-15 15v105.5h-105.5c-8.284 0-15 6.716-15 15v60.25c0 8.284 6.716 15 15 15h105.5v286.25c0 8.284 6.716 15 15 15h60.25c8.284 0 15-6.716 15-15v-286.25h105.5c8.284 0 15-6.716 15-15v-60.25c0-8.284-6.716-15-15-15z"/></svg> 
          </div>
        </div>
      </div>
      <div class="  flex mt-6 align-middle justify-around items-center">
        <!-- image with love -->
          <div class=" relative ">
            <div style="top:-10px;left:-10px" class="w-auto rounded-lg absolute p-2 bg-white">
              <svg class="md:h-6 md:w-6 h-4 w-4 fill-current text-red-700" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M376 30c-27.783 0-53.255 8.804-75.707 26.168-21.525 16.647-35.856 37.85-44.293 53.268-8.437-15.419-22.768-36.621-44.293-53.268C189.255 38.804 163.783 30 136 30 58.468 30 0 93.417 0 177.514c0 90.854 72.943 153.015 183.369 247.118 18.752 15.981 40.007 34.095 62.099 53.414C248.38 480.596 252.12 482 256 482s7.62-1.404 10.532-3.953c22.094-19.322 43.348-37.435 62.111-53.425C439.057 330.529 512 268.368 512 177.514 512 93.417 453.532 30 376 30z"/></svg>
            </div>
            <div class="md:w-64 md:p-3 w-32 p-2 rounded-xl bg-white shadow-lg">
              <img class="md:h-64 w-full rounded-r-xl rounded-bl-lg h-32 object-cover object-bottom" src="~/static/img/hero.jpeg" alt="">
              <h2 class="md:text-xl text-gray-900 font-semibold text-xs mt-1 mb-1 md:ml-4">Journey in Life</h2>
            </div>
          </div>
        <!-- vue logo -->
        <div class=" flex ">
          <div class=" p-2 rounded-full bg-white shadow-lg " >
            <img class="md:w-20 md:h-20 p-2 w-16 object-cover object-center " src="~/static/img/vue.png" alt="vuejs logo">
          </div>
        </div>
        <!-- gallery-card -->
        <div class=" relative ">
          <div class=" md:p-6 w-auto absolute p-4 ">
            <svg class="md:h-5 md:w-5 h-3 w-3 fill-current text-white" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg"><path d="M437.02 74.98C388.667 26.629 324.38 0 256 0S123.333 26.629 74.98 74.98C26.629 123.333 0 187.62 0 256s26.629 132.667 74.98 181.02C123.333 485.371 187.62 512 256 512s132.667-26.629 181.02-74.98C485.371 388.667 512 324.38 512 256s-26.629-132.667-74.98-181.02zm36.051 243.962h-146.09l112.461-194.789C466.207 161.288 482 206.832 482 256c0 21.836-3.123 42.953-8.929 62.942zm-253.411 0L183.32 256l36.34-62.942h72.68L328.68 256l-36.34 62.942zM418.98 99.595L346 226 233.486 31.119A227.616 227.616 0 01256 30c63.977 0 121.825 26.727 162.98 69.595zM201.976 36.543l73.043 126.515H50.005C78.29 100.614 134.164 53.24 201.976 36.543zM38.929 193.058H185.02L72.558 387.847C45.793 350.712 30 305.168 30 256c0-21.836 3.124-42.954 8.929-62.942zM93.02 412.405L166 286l112.515 194.881A227.636 227.636 0 01256 482c-63.977 0-121.825-26.727-162.98-69.595zm217.004 63.052L236.98 348.942h225.014c-28.284 62.443-84.158 109.818-151.97 126.515z"/></svg>
          </div>
          <div class="svg-love w-auto rounded-lg absolute p-2 bg-white">
              <svg class="md:h-5 md:w-5 h-3 w-3 fill-current text-red-700" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M376 30c-27.783 0-53.255 8.804-75.707 26.168-21.525 16.647-35.856 37.85-44.293 53.268-8.437-15.419-22.768-36.621-44.293-53.268C189.255 38.804 163.783 30 136 30 58.468 30 0 93.417 0 177.514c0 90.854 72.943 153.015 183.369 247.118 18.752 15.981 40.007 34.095 62.099 53.414C248.38 480.596 252.12 482 256 482s7.62-1.404 10.532-3.953c22.094-19.322 43.348-37.435 62.111-53.425C439.057 330.529 512 268.368 512 177.514 512 93.417 453.532 30 376 30z"/></svg>
          </div>
          <div class="md:w-64 md:p-3 w-32 p-2 rounded-xl bg-white shadow-lg">
            <img class="md:h-64 w-full rounded-r-xl rounded-tl-xl rounded-bl-lg h-32 object-cover object-bottom" src="~/static/img/foto11.png" alt="">
            <h2 class="md:text-xl text-gray-900 font-semibold text-xs mt-4 mb-1 md:ml-4">Coding Gallery</h2>
          </div>
        </div>
      </div>
      <div class="md:mt-8 justify-center flex flex-row align-middle items-center mt-6">
        <!-- python logo -->
        <div class="">
          <div class="md:mr-8 mr-4 p-2 rounded-full bg-white shadow-lg " >
            <svg class="md:w-16 md:h-16 w-12 h-12 p-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 255"><defs><linearGradient x1="12.959%" y1="12.039%" x2="79.639%" y2="78.201%" id="a"><stop stop-color="#387EB8" offset="0%"/><stop stop-color="#366994" offset="100%"/></linearGradient><linearGradient x1="19.128%" y1="20.579%" x2="90.742%" y2="88.429%" id="b"><stop stop-color="#FFE052" offset="0%"/><stop stop-color="#FFC331" offset="100%"/></linearGradient></defs><path d="M126.916.072c-64.832 0-60.784 28.115-60.784 28.115l.072 29.128h61.868v8.745H41.631S.145 61.355.145 126.77c0 65.417 36.21 63.097 36.21 63.097h21.61v-30.356s-1.165-36.21 35.632-36.21h61.362s34.475.557 34.475-33.319V33.97S194.67.072 126.916.072zM92.802 19.66a11.12 11.12 0 0111.13 11.13 11.12 11.12 0 01-11.13 11.13 11.12 11.12 0 01-11.13-11.13 11.12 11.12 0 0111.13-11.13z" fill="url(#a)"/><path d="M128.757 254.126c64.832 0 60.784-28.115 60.784-28.115l-.072-29.127H127.6v-8.745h86.441s41.486 4.705 41.486-60.712c0-65.416-36.21-63.096-36.21-63.096h-21.61v30.355s1.165 36.21-35.632 36.21h-61.362s-34.475-.557-34.475 33.32v56.013s-5.235 33.897 62.518 33.897zm34.114-19.586a11.12 11.12 0 01-11.13-11.13 11.12 11.12 0 0111.13-11.131 11.12 11.12 0 0111.13 11.13 11.12 11.12 0 01-11.13 11.13z" fill="url(#b)"/></svg>
          </div>
        </div>
        <!-- name card -->
        <div class=" flex flex-row-reverse">
          <div class=" w-64 md:w-80 shadow-lg rounded-xl bg-white  flex justify-center align-middle content-center px-4 py-4">
            <img src="~/static/img/face.jpeg" alt="zernonia" class=" w-16 h-16 rounded-xl object-cover object-top">
            <div class="ml-4 relative">
              <h2 class="text-gray-900 font-bold tracking-wide md:text-lg">Self Learner</h2>
              <p class=" mt-1 font-semibold text-xs text-gray-800 md:text-sm">Learn coding from Web. From Frontend to Backend</p>
              <div class=" absolute flex justify-center align-middle mt-2 ">
                <button class=" btn bg-gray-800">Open</button>
                <button class=" btn bg-gray-400 ml-2">Cancel</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div>
    
    <h1 class="md:ml-32 mt-12 ml-3 text-3xl font-extrabold tracking-wider text-white uppercase"><span class="text-gray-500">Blog</span> Series</h1>
    <div class="mt-3 flex flex-col md:flex-row justify-center align-middle items-center">
      <!-- Vuejs blog -->
      <div class=" relative flex align-middle items-center mt-3 md:mr-6">
        <img style="left:-20px;" class="p-2 w-32 h-32 object-center rounded-xl absolute" src="~/static/img/vue.png" alt="vue logo">
        <div class=" flex items-end justify-end">
          <div class=" shadow-lg p-3 mt-3 h-auto relative flex justify-center items-center align-middle rounded-xl bg-white w-9/12">
            <div style="top:-10px;left:-10px" class="w-auto rounded-lg absolute p-2 bg-white">
                  <svg class="md:h-6 md:w-6 h-4 w-4 fill-current text-red-700" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M376 30c-27.783 0-53.255 8.804-75.707 26.168-21.525 16.647-35.856 37.85-44.293 53.268-8.437-15.419-22.768-36.621-44.293-53.268C189.255 38.804 163.783 30 136 30 58.468 30 0 93.417 0 177.514c0 90.854 72.943 153.015 183.369 247.118 18.752 15.981 40.007 34.095 62.099 53.414C248.38 480.596 252.12 482 256 482s7.62-1.404 10.532-3.953c22.094-19.322 43.348-37.435 62.111-53.425C439.057 330.529 512 268.368 512 177.514 512 93.417 453.532 30 376 30z"/></svg>
            </div>
            <div class=" ml-4">
              <h2 class=" text-lg font-extrabold tracking-wider text-gray-900 ">Web Development</h2>
              <p class=" text-sm leading-tight font-light text-gray-700">HTML, CSS, Javascipt, and mostly VueJS content</p>
            </div>
          </div>
        </div>
      </div>
      <!-- Python blog -->
      <div class=" relative flex align-middle items-center mt-3">
        <div class="z-10 flex items-start justify-start">
          <div class=" shadow-lg p-3 mt-3 h-auto relative flex justify-center items-center align-middle rounded-xl bg-white w-9/12">
            <div style="top:-10px;right:-10px" class="w-auto rounded-lg absolute p-2 bg-white">
                  <svg class="md:h-6 md:w-6 h-4 w-4 fill-current text-red-700" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M376 30c-27.783 0-53.255 8.804-75.707 26.168-21.525 16.647-35.856 37.85-44.293 53.268-8.437-15.419-22.768-36.621-44.293-53.268C189.255 38.804 163.783 30 136 30 58.468 30 0 93.417 0 177.514c0 90.854 72.943 153.015 183.369 247.118 18.752 15.981 40.007 34.095 62.099 53.414C248.38 480.596 252.12 482 256 482s7.62-1.404 10.532-3.953c22.094-19.322 43.348-37.435 62.111-53.425C439.057 330.529 512 268.368 512 177.514 512 93.417 453.532 30 376 30z"/></svg>
            </div>
            <div class=" ml-4">
              <h2 class=" text-lg font-extrabold tracking-wider text-gray-900 ">Data Science</h2>
              <p class=" text-sm leading-tight font-light text-gray-700">Python, Tensorflow, Keras and Flask for API.</p>
            </div>
          </div>
        </div>
        <svg style="right:-20px;" class="w-32 h-32 p-2 absolute" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 255"><defs><linearGradient x1="12.959%" y1="12.039%" x2="79.639%" y2="78.201%" id="a"><stop stop-color="#387EB8" offset="0%"/><stop stop-color="#366994" offset="100%"/></linearGradient><linearGradient x1="19.128%" y1="20.579%" x2="90.742%" y2="88.429%" id="b"><stop stop-color="#FFE052" offset="0%"/><stop stop-color="#FFC331" offset="100%"/></linearGradient></defs><path d="M126.916.072c-64.832 0-60.784 28.115-60.784 28.115l.072 29.128h61.868v8.745H41.631S.145 61.355.145 126.77c0 65.417 36.21 63.097 36.21 63.097h21.61v-30.356s-1.165-36.21 35.632-36.21h61.362s34.475.557 34.475-33.319V33.97S194.67.072 126.916.072zM92.802 19.66a11.12 11.12 0 0111.13 11.13 11.12 11.12 0 01-11.13 11.13 11.12 11.12 0 01-11.13-11.13 11.12 11.12 0 0111.13-11.13z" fill="url(#a)"/><path d="M128.757 254.126c64.832 0 60.784-28.115 60.784-28.115l-.072-29.127H127.6v-8.745h86.441s41.486 4.705 41.486-60.712c0-65.416-36.21-63.096-36.21-63.096h-21.61v30.355s1.165 36.21-35.632 36.21h-61.362s-34.475-.557-34.475 33.32v56.013s-5.235 33.897 62.518 33.897zm34.114-19.586a11.12 11.12 0 01-11.13-11.13 11.12 11.12 0 0111.13-11.131 11.12 11.12 0 0111.13 11.13 11.12 11.12 0 01-11.13 11.13z" fill="url(#b)"/></svg>
      </div>


    </div>

    </div>
    <!-- Vue Logo -->
      <!-- <div class="flex flex-row-reverse">
        <div class=" w-24 bg-white p-2 pb-6 rounded-xl shadow-md">
          <img class="bg-gray-300 p-2 rounded-xl w-full object-cover object-center " src="~/static/img/vue.png" alt="vuejs logo">
          <button class=" absolute btn bg-green-500 mt-2">VueJS</button>   
        </div>
      </div> -->
  </div>
</template>

<script>

export default {
  head() {
    return {
      script: [{ src: 'https://identity.netlify.com/v1/netlify-identity-widget.js' }],
    };
  },
}
</script>

<style>
/* Sample `apply` at-rules with Tailwind CSS
.container {
  @apply min-h-screen flex justify-center items-center text-center mx-auto;
}
*/
.btn {
    @apply text-white text-sm px-6 py-1 rounded-xl outline-none;}

.svg-love {
  top:8rem; left:20px;
}

.init {
  width: 100px;
  height: 100px;
  top: 200px;
  left: 50px;
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  z-index: 0;
}

.init span {
    width: 25px;
    height: 25px;
    display: block;
    transition: all .25s ease;
    display: flex;
    align-items: center;
    justify-content: center;
}

.init span:after {
    content: "";
    position: relative;
    width: 6px;
    height: 6px;
    background: white;
    border-radius: 50%;
    transition: all .25s ease;
}

@media only screen and (min-width: 768px){
.svg-love {
  top:16rem
}
}

@media only screen and (max-width: 767px){
.init{
  top:10px;

  }
}
</style>