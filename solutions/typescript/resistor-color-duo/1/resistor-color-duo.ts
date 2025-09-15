export function decodedValue(colors: Array<string>) {

	let resistor_code_digits_string: string = ""
	let first_digit: number = COLORS.indexOf(colors[0])
	resistor_code_digits_string = first_digit.toString()
	if (typeof(colors[1]) !== 'undefined')
	{
		let second_digit: number = COLORS.indexOf(colors[1])
		resistor_code_digits_string += second_digit.toString()
	}
	return Number(resistor_code_digits_string)
}


export const COLORS = [
      'black',
      'brown',
      'red',
      'orange',
      'yellow',
      'green',
      'blue',
      'violet',
      'grey',
      'white',
]

