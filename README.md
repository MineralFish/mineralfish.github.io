# mineralfish.github.io

Might be mineral fish site in future, idk. Currently just a fish list. Made with Svelte. Built version (used at mineralfish.github.io) at the build branch. Build steps below.
<br>
![OfFISHial Mineral Fish Site](https://github.com/MineralFish/mineralfish.github.io/blob/master/public/assets/offishial.png?raw=true)
 
---------

requirements:
- [git](https://git-scm.com/) or github desktop or some other git gui
- [node.js](https://nodejs.org/) with npm (normally preinstalled with node.js) or some other alternative

install:  
(in a command prompt)
```
git clone https://github.com/MineralFish/mineralfish.github.io.git
```
(or use your fork. if you use some kind of git gui you should clone the repo from there)

run:  
```
npm run dev
```
(changes will automatically apply while the server is running. press ctrl+c to stop)

build
```
npm run build
```
(if you're submitting a pr, you shouldn't need to use this. `npm run dev` works for development and you shouldn't touch the built code. typically the github action will do automatic building for each commit in the repo)