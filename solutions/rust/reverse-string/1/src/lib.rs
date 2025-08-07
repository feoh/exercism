pub fn reverse(input: &str) -> String {
    // todo!("Write a function to reverse {input}");
    let mut reversed = String::new();
    for c in input.chars() {
        reversed.push(c);
    }
    return reversed;
}

