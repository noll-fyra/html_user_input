document.addEventListener('DOMContentLoaded', function () {
  var newMovie = document.querySelector('#newMovie')
  var newYear = document.querySelector('#newYear')
  var button = document.querySelector('button')
  var table = document.querySelector('table')
  var tbody = table.querySelector('tbody')

  var firstMovie = tbody.querySelector("tr:nth-child(3)")

  button.addEventListener('click', function () {
    var newRow = document.createElement('tr')
    var tableLength = table.querySelectorAll('tr')
    if (!newMovie.value || !newYear.value) {
      window.alert('Missing information. Please enter a movie title and year.')
      return
    }

    var year = new Date().getFullYear()
    if (isNaN(newYear.value) || newYear.value < 1878 || newYear.value > year) {
      window.alert('Enter a proper year')
      return
    }
    var rowArray = [tableLength.length, newMovie.value.toUpperCase(), newYear.value]
    rowArray.forEach(function (a) {
      var newCell = document.createElement('td')
      newCell.textContent = a
      newRow.appendChild(newCell)
    })
tbody.insertBefore(newRow, firstMovie)
    // tbody.appendChild(newRow)
  })
})
