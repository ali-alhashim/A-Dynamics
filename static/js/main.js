
function toggleByIdMenu(elementId) {
    console.log('toggleByIdMenu', elementId);
    let elementObj = document.getElementById(elementId);

    if (elementObj.classList.contains('show')) {
        elementObj.classList.remove('show');
        console.log('remove show class')
    } else {
        elementObj.classList.add('show');
        console.log('add show class')
    }
}



// Close the profile menu or  notification Bar if the user clicks outside of it
window.onclick = function(event) {

    if (!event.target.matches('.profile img')) {
        const profileMenu = document.getElementById('profileMenu');
        if (profileMenu.classList.contains('show')) {
            profileMenu.classList.remove('show');
        }
    }

    if(!event.target.matches('.notificationSidebarItem, .notificationSidebar, .profile img'))
        {
            const notificationBar = document.getElementById('notification_sidebar');
            if(notificationBar.classList.contains('show')){
                notificationBar.classList.remove('show');
                console.log('remove show class from notificationSidebar')
            }
        }

    if(!event.target.matches('.filter-bar-item, .filter-bar-item a img, .filter-bar-item a, #add_new_window, .add-new-window-contaner *, .add-new-window-contaner'))
    {
        const add_new_window = document.getElementById('add_new_window');
        if(add_new_window.classList.contains('show')){
            add_new_window.classList.remove('show');
            console.log('remove show class from add_new_window')

        }
    }

    if(!event.target.matches('.filter-bar-item, .filter-bar-item a img, .filter-bar-item a, #add_new_window, .add-new-window-contaner *, .add-new-window-contaner'))
        {
            const EditFilter_window = document.getElementById('EditFilter_window');
            if(EditFilter_window.classList.contains('show')){
                EditFilter_window.classList.remove('show');
                console.log('remove show class from EditFilter_window')
    
            }
        }
    
   
   
}



function addMoreColumn()
{
    let totalColumnInput  = document.getElementById('total_column_id');
    let totalColumns = parseInt(totalColumnInput.value);
    totalColumns += 1;
    totalColumnInput.value = totalColumns;

    const tbody = document.getElementById('edit_filter_tbody_id');
     // Create a new row element
    const newRow = document.createElement('tr');

    // Copy the column select options from the first select in the table
    const existingColumnSelect = document.querySelector('select[name^="column_"]');
    const columnSelect = existingColumnSelect.cloneNode(true);
    columnSelect.name = `column_${totalColumns}`;

    // Create a cell and append the column select element
    const columnCell = document.createElement('td');
    columnCell.appendChild(columnSelect);

    // Copy the filter method options from the first select in the table
    const existingFilterSelect = document.querySelector('select[name^="filter_Method_"]');
    const filterSelect = existingFilterSelect.cloneNode(true);
    filterSelect.name = `filter_Method_${totalColumns}`;

      // Create a cell and append the filter select element
      const filterCell = document.createElement('td');
      filterCell.appendChild(filterSelect);

      // Create a new input element for the keyword
    const keywordInput = document.createElement('input');
    keywordInput.type = 'text';
    keywordInput.name = `keyword_${totalColumns}`;
    keywordInput.placeholder = 'keyword';

    // Create a cell and append the keyword input element
    const keywordCell = document.createElement('td');
    keywordCell.appendChild(keywordInput);


     // Append all cells to the new row
     newRow.appendChild(columnCell);
     newRow.appendChild(filterCell);
     newRow.appendChild(keywordCell);


     const newRow2 = document.createElement('tr');
     // add logical operator select for connecting first column with the 2nd
     // options (AND, OR, NOT)   
     const logicCell = document.createElement('td');
     logicCell.colSpan = 3;

     const logicSelect = document.createElement('select');
     logicSelect.name = `logical_operator_${totalColumns - 1}`;

     // Add options for logical operators
     const options = ['AND', 'OR', 'NOT'];
     options.forEach(op => {
         const optionElement = document.createElement('option');
         optionElement.value = op;
         optionElement.text = op;
         logicSelect.appendChild(optionElement);
     });

        // Append the select element to the logic cell
        logicCell.appendChild(logicSelect);

        // Append the logic cell to the newRow2
        newRow2.appendChild(logicCell);

        // Insert the logical operators row before the new filter row
        tbody.appendChild(newRow2);


      // Append the new row to the tbody
    tbody.appendChild(newRow);

    
}