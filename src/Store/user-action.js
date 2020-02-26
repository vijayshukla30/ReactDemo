export function changeFirstName(firstName) {
  return {
    type: 'CHANGE_FIRST_NAME',
    data: {
      firstName
    }
  }
}

export function changeLastName(lastName) {
  return {
    type: 'CHANGE_LAST_NAME',
    data: {
      lastName
    }
  }
}
