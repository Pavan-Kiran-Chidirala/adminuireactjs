# Getting Started with AdminUi App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).
— This is an interface for admins to see and delete users.
— The users will be provided via an API.
— The pages displayed contains a maximum of 10 members in each page and the count of pages depends on the members count.
— Note: The AdminUi gets reseted to the initial state after clicking on refresh.

### `API reference`

https://geektrust.s3-ap-southeast-1.amazonaws.com/adminui-problem/members.json

### `Component Hierrarchy`

```
Home
Pages Pagination
```

### `Functionalities`

```
Search
Edit
Delete
Delete Selected
Select
Select All
Pagination
```

The page doesn't reload when you make changes.\
You may also see any lint errors in the console.

### `How it works`

#### `Search Functionality`

The searching can be done using the searchbar at the top, It searches the columns with the column names - name, eamil and role with the search value and displays the results which mathces the search value.

#### `Select Functionality`

We can select a specific member using the checkbox filed that is placed at the left corner of every row. This inturn turns the background color of the selected row to gray color.

#### `Select All Functionality`

We can select every member of the current page by clicking on the checkbox field at the top left corner in the page.
This inturn turns the background color of the selected rows to gray color.

#### `Delete Functionality`

Every member row contains a delete icon button at the right corner. Clicking on this icon will delete the row from the current list.

#### `Delete Selected Functionality`

This can be found at the bottom left corner of the page and Clicking on it will delete all the selected members from the current list.

#### `Edit Functionality`

This can be found at the right corner of every member row and Clicking on it will make the specific row editable.
After editing the field, clicking 'Enter' will save the changes.
If we click 'Enter' without making changes then the previous value will be displayed for the unedited fields.

#### `Pagination`

Every page contains the pagination field at the bottom. The current page will be highlighted at all times and we can switch between pages swiftly by clicking on the specific page number.
Note: The pagination count will be updated on deleting the members.

#### `Run the Tests`

`npm run test`

#### `Visit the AdminUi`

https://Pavan-Kiran-Chidirala.github.io/adminuireactjs
