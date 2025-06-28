# [26. Optics: The Principle of Least Time](https://www.feynmanlectures.caltech.edu/I_26.html)

> Imagine a star billions of miles away; we would like to cause all the light that comes in to come to a focus.

Suppose we want to focus light into a single point. We can bend a mirror in such a shape that all the light arriving at it reflects into a single focus point.

> When the various rays have arrived at some plane KK′, perpendicular to the rays, all the times in this plane are equal.

![17510930719552088952876571572330](https://github.com/user-attachments/assets/f5e2f0d7-a142-42bd-91cb-61cc3d42e07c)

> The rays must then come down to the mirror and proceed toward P′ in equal times. That is, we must find a curve which has the property that the sum of the distances XX′+X′P′ is a constant, no matter where X is chosen. An easy way to find it is to extend the length of the line XX′ down to a plane LL′. Now if we arrange our curve so that A′A′′=A′P′, B′B′′=B′P′, C′C′′=C′P′, and so on, we will have our curve, because then of course, AA′+A′P′=AA′+A′A′′ will be constant. Thus our curve is the locus of all points equidistant from a line and a point. Such a curve is called a parabola; the mirror is made in the shape of a parabola.

If we bend a horizontal line into a curve in such a way that for any point on the curve, the distance between that point and the focus point inside it is the same as the perpendicular distance from it to the original horizontal line, then we would have bent it into a parabola. This is a shape that relates an infinite horizontal line on its outside (the directrix) to a single point on its inside (the focus) by lying in the middle of any path from the directrix that starts out perpendicular to it but then gets reflected into the focus halfway through. If we plot points on an xy coordinate system where y=x² ((1,1), (2,4), (3,9), ...), we will draw a parabola with the focus at (0,1/4) and directrix at y=-1/4: the distance from (2,-1/4) to (2,4) is the same as the distance from (2,4) to (0,1/4)—4.25, the distance from (3,-1/4) to (3,9) is the same as the distance from (3,9) to (0,1/4)—9.25, etc. Such a parabola models, for example, the relationship between the distance light travels and the reduction in its intensity. For example, at a distance of 3 units from its source, it will be 9 times less intense. If we want to know the reduction in intensity for a number the square of which we don't know (e.g., a noninteger), we can use the parabola plot to see which value of y corresponds to the given value of x by drawing a perpendicular from the x-axis to the parabola and then from the parabola to the y-axis. Just as parabolas, their geometric properties notwithstanding, model relationships between some observable variables of nature (e.g., distances of propagation of forces and reductions in their intensity) so do other algebraic functions. For example, the ratio of two sine waves, one for the incidence angle of a light beam and the other for its refraction angle, is the refraction coefficient of the material through which the light is propagating. Careful experiments allow us to reveal which algebraic functions can serve as mathematical models for the relationships between variables of nature. A lot of science is about designing such experiments and fitting the results into mathematical models. However, there is still more to science. It is also concerned with finding a principle that implies such a mathematical model.

> The real glory of science is that we can find a way of thinking such that the law is evident.

Fermat’s principle of least time is a way of thinking about optics that correctly predicts the angles of refraction.

> Out of all possible paths that it might take to get from one point to another, light takes the path which requires the shortest time.

![17510930027071505062626734228149](https://github.com/user-attachments/assets/fb2f87d1-7d86-40c7-927b-29350d82047b)

> When is the sum of these two lengths the least? The answer is easy: when the line goes through point C as a straight line from A to B′.

The fact that the incidence and refraction angles are equal for mirrors is implied by the idea that light travels in straight lines, i.e., takes the path of least time. When we're in the same medium, that's also the path of least distance. However, when we cross multiple media, the path of least distance and the path of least time are not necessarily the same.

> Let us imagine that a beautiful girl has fallen out of a boat, and she is screaming for help in the water at point B. The line marked x is the shoreline. We are at point A on land, and we see the accident, and we can run and can also swim. But we can run faster than we can swim.

![17510930377879186844365834875322](https://github.com/user-attachments/assets/8de6c919-080c-4999-85a9-ad4d931af36c)

> It would be advantageous to travel a little greater distance on land in order to decrease the distance in the water, because we go so much slower in the water.

Suppose that the distances EC and XF are equal, but we can move in water 1/n the speed we can move on land. Then, the time relation is the following: EC=n·XF. If we express this in terms of sines, we get $XC\sin EXC = n\cdot XC\sin XCF$, or $\sin\theta_i=n\sin\theta_r$, that is the sine of the incidence angle is equal to the sine of the refraction angle times the refraction constant n, which indicates how much faster light travels in air than in water. This is the mathematical formula that fits the observations about refraction in water, i.e., Snell’s law of refraction.

> The statement of least time and the statement that angles are equal on reflection, and that the sines of the angles are proportional on refraction, are the same.

The principle of least time is consistent with the fact that light doesn't necessarily travel in straight lines. As the sun is setting, the light has to penetrate the lower, much thicker atmosphere, which slows it down. But because a faster path is available to it through a higher, less dense atmosphere, that's the path it ends up taking, even though this path is longer and has curvature. This is why we see the sun as higher than it actually is when it's setting, to the point where, if its light had traveled to us in a straight line, we wouldn't have seen it at all, as it would've already been below the horizon.

> When we see the sun setting, it is already below the horizon.

Any time we deal with dense air ahead of us and sparse air around it, we see such optical illusions.

> The light of the sun can get to point S beyond the horizon more quickly if, instead of just going in a straight line, it avoids the dense regions where it goes slowly by getting through them at a steeper tilt. When it appears to go below the horizon, it is actually already well below the horizon. Another example of this phenomenon is the mirage that one often sees while driving on hot roads. One sees “water” on the road, but when he gets there, it is as dry as the desert.

When we see the sky reflected off the road, our brains first interpret it as there being actual reflective material on the roads, e.g., puddles of water. The fact that the light from the sky took a curved path to our eyes is less intuitive to us.

> What we are really seeing is the sky light “reflected” on the road: light from the sky, heading for the road, can end up in the eye.

![17510930510123959776831771497135](https://github.com/user-attachments/assets/05eebd82-5a85-4c8e-9584-b3fd8a71807e)

> The air is very hot just above the road but it is cooler up higher. Hotter air is more expanded than cooler air and is thinner, and this decreases the speed of light less. That is to say, light goes faster in the hot region than in the cool region. Therefore, instead of the light deciding to come in the straightforward way, it also has a least-time path by which it goes into the region where it goes faster for awhile, in order to save time. So, it can go in a curve.

You can verify that light does not travel in a straight line by observing what it does when it encounters a narrow slit.

> Find a small, bright light, say an unfrosted bulb in a street light far away or the reflection of the sun in a curved automobile bumper. Then put two fingers in front of one eye, so as to look through the crack, and squeeze the light to zero very gently. You will see that the image of the light, which was a little dot before, becomes quite elongated, and even stretches into a long line. The reason is that the fingers are very close together, and the light which is supposed to come in a straight line is spread out at an angle, so that when it comes into the eye it comes in from several directions. Also you will notice, if you are very careful, side maxima, a lot of fringes along the edges too. Furthermore, the whole thing is colored.

It scatters in a peculiar way: it stretches and flares, different colors scatter differently (on account of their different wavelengths), etc.
