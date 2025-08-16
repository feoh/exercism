use time::PrimitiveDateTime as DateTime;

// Returns a DateTime one billion seconds after start.
pub fn after(start: DateTime) -> DateTime {
    return start.checked_add(time::Duration::seconds(1_000_000_000))
        .expect("Gigasecond calculation failed");
}
