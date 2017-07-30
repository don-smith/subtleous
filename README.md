# Subtleous

## Concept

The idea is an evolving gradient between random points that are associated with a specific colour. Each point will form a gradient between each of the points and the background colour. All points should have a loose relationship with each other based on colour theory and transparency. The colour of each point, as well as the background, will slowly pulse causing the entire canvas to be in a constant state of change.


## Running it

After cloning this repository and navigating to its new directory:

```sh
npm install
npm start
```

Then visit [`http://172.18.0.1:9966`](http://172.18.0.1:9966)

* **Left click** to **pause** the animation.
* **Right click** to **change** the color and location of the points.


## Project status 

Currently the points are all pulsing at the same time and rate. Eventually they will pulse independently at different rates. 

Right now the colours are completely random and are not following a palette. A future version will adhere to a palette.
