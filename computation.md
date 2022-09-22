# Cone Development

If we know that our cone needs to have a side-length of `L` and a
base circumference of `C`, then it follows that the cone development
needs to have an angle `theta` such that the arc on the circle with radius `L`
with central angle `theta` has exactly arclength `C`.

Arclength is given by `arclength=radius*theta`, so it follows that
`theta=arclength/radius=C/L`.

# Truncated Cone Development

Now, if we instead know the sidelength `L`, the base circumference `CB`
and the top circumference `CT`, we first need to derive the total sidelength
before we can get anywhere.

This can be reduced to similar triangles: cut the cone by a vertical plane -
the resulting intersection is a triangle with base = _base diameter_ `DB=CB/π`,
side length the total side length of the entire cone, and some corresponding
height.

The interesting truncated cone corresponds to a trapeze with the same base,
the same sides, and some horizontal top line with total length the _top diameter_
`DT=CT/π`.

This isosceles triangle is _similar_ to the triangle with base the _difference in diameters_
and height the height of the trapeze. So let's consider this smaller triangle.

This small isosceles triangle has sidelength `L` and base the difference in diameters
`DB-DT`. By splitting the triangle in half we get a right triangle with hypotenuse `L`
and sides `(DB-DT)/2` and `H`. By Pythagoras Theorem, `H^2 = L^2-((DB-DT)/2)^2`.

But as it turns out, similarity is enough and we need neither `H` nor the top angle of the
isosceles triangle.

The scaling factor for the similarity of triangles is `(DB-DT) / DB`.

It follows that the full cone has a sidelength of `L*DB/(DB-DT)` and arclength
`CB` yielding a central angle of `theta=CB/(L*DB/(DB-DT))`.

The outer radius for appropriate curvatures is this sidelength `L*(DB-DT)/DB`,
and the inner radius is `L*(DB-DT)/DB - L`. 