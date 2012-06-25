good = []
v_good = []
(if score > 60 then good else v_good).push score for score in [60, 45, 56, 90, 95, 0]
alert good
alert v_good
