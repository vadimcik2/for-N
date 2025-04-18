import turtle

window = turtle.Screen()
window.bgcolor("lightyellow")

t = turtle.Turtle()
t.pensize(2)
t.color("orange")

for i in range(36):
    t.forward(100)
    t.right(60)
    t.forward(100)
    t.right(60)
    t.forward(100)
    t.right(60)
    t.right(10)

turtle.done()
