with open("svg.svg") as f:
    r = f.read().strip().split("\n")

for i, c in enumerate(r[1:-1]):
    with open(f"new_parallax{i}.svg", "w") as f:
        f.write(f"{r[0]}\n{c}\n{r[-1]}\n")
        print(f"Written to file {i}")
