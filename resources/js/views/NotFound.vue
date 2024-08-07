<template>
    <div class="not-found-container">
      <pre>

        444444444            000000000                 444444444  
      4::::::::4          00:::::::::00              4::::::::4  
     4:::::::::4        00:::::::::::::00           4:::::::::4  
    4::::44::::4       0:::::::000:::::::0         4::::44::::4  
   4::::4 4::::4       0::::::0   0::::::0        4::::4 4::::4  
  4::::4  4::::4       0:::::0     0:::::0       4::::4  4::::4  
 4::::4   4::::4       0:::::0     0:::::0      4::::4   4::::4  
4::::444444::::444     0:::::0 000 0:::::0     4::::444444::::444
4::::::::::::::::4     0:::::0 000 0:::::0     4::::::::::::::::4
4444444444:::::444     0:::::0     0:::::0     4444444444:::::444
          4::::4       0:::::0     0:::::0               4::::4  
          4::::4       0::::::0   0::::::0               4::::4  
          4::::4       0:::::::000:::::::0               4::::4  
        44::::::44      00:::::::::::::00              44::::::44
        4::::::::4        00:::::::::00                4::::::::4
        4444444444          000000000                  4444444444
      </pre>
    </div>
    <body>
    <div class="footsteps">
        <pre class="footstep">
          (/--.
            `-' 
        </pre>
        <pre class="footstep">
       
            ,-.
          (\--'
        </pre>
        <pre class="footstep">
          (/--.
            `-' 
        </pre>
        <pre class="footstep">
       
            ,-.
          (\--'
        </pre>
        <pre class="footstep">
          (/--.
            `-' 
        </pre>
        <pre class="footstep">
       
            ,-.
          (\--'
        </pre>
        <pre class="footstep">
          (/--.
            `-' 
        </pre>
        <pre class="footstep">
       
            ,-.
          (\--'
        </pre>
    </div>
</body>
<div class="center-div">
    <p> Looks like the shoe you are trying to find is running away! </p>
    <router-link to="/" class="home-link">Take me back home</router-link>
</div>
  </template>
  
<script>


</script>

<style scoped>
body {
    font-family: 'Courier New', Courier, monospace;
    white-space: pre;
    font-size: 16px;
    line-height: 1;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    margin: 0;
    background: #f0f0f0;
    width: 100vw;
}
.footsteps {
    display: flex;
   
    justify-content: space-around;
}
.footstep {
    opacity: 0;
    animation: stepIn 1s forwards;
}
.footstep:nth-child(1) { animation-delay: 0s; }
.footstep:nth-child(2) { animation-delay: 0.5s; }
.footstep:nth-child(3) { animation-delay: 1s; }
.footstep:nth-child(4) { animation-delay: 1.5s; }
.footstep:nth-child(5) { animation-delay: 2s; }
.footstep:nth-child(6) { animation-delay: 2.5s; }
.footstep:nth-child(7) { animation-delay: 3s; }
.footstep:nth-child(8) { animation-delay: 3.5s; }
@keyframes stepIn {
    from { opacity: 0; }
    to { opacity: 1; }
}

.not-found-container {
    text-align: center;
    padding: 50px;
    color: hsl(0, 0%, 40%);
  }
  .center-div{
    display: flex;
    flex-direction: column;
    align-items: center;

  }
  .home-link {
    display: inline-block;
    margin-top: 20px;
    padding: 10px 20px;
    background-color: hsl(26, 100%, 55%);
    color: white;
    text-decoration: none;
    border-radius: 5px;
    font-size: 1.1rem;
  }
  
  .home-link:hover {
    background-color:  hsl(25, 100%, 94%);
  }
</style>
  