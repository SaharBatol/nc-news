export const shortDate = (created_at) => {
  if (created_at) {
    let dateCreatedAt = created_at;
    let dateParts = dateCreatedAt.split("-");
    let newDate = new Date(
      dateParts[0],
      dateParts[1] - 1,
      dateParts[2].substr(0, 2)
    );
    return newDate.toLocaleDateString("eu-UK");
  }
};
