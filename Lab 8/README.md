# Supabase Auth Example Project

### Steps:

#### Step 1: Create a New Project
- First, create a new project in your preferred code editor. Set up the necessary file structure with an HTML file, a CSS file, and a JavaScript file.

#### Step 2: Create a New Table
- In your Supabase dashboard, create a new table to store the subscription information. Define the necessary columns, such as name and email.

#### Step 3: Create the Insert Row Level Security
- To ensure the security of your data, set up the Insert Row Level Security (RLS) in Supabase. This will allow only authorized users to insert data into the table.
- The goal here is to create an RSL that will allow all anon users to INSERT a line but not to allow any user to read the data, we don’t want someone to make a request that will SELECT ALL and return all the user that has subscribed to your mailing list.

#### Step 4: Create Your UI with a Form
- In your HTML file, create the necessary form elements such as input fields for name and email, and a submit button. Style the form using CSS to make it visually appealing.
- If you are making a coming soon page and you don’t want to waste your time by creating everything from scratch, I recommend to find a template that you will customize. Also, you can use a CSS framework to help you like Bootstrap.
- At the end of the body of your HTML file, insert the Supabase CDN reference and your file reference.
Your file reference will be after the Supabase reference to be able to call the Supabase function

```
<!-- Supabase -->
<script src="https://unpkg.com/@supabase/supabase-js@2"></script>
<!-- Core theme JS-->
<script src="js/scripts.js"></script>
```

#### Step 5: Get the Values While Pressing the Button
- In your JavaScript file, write a function that gets the values entered in the form fields when the submit button is pressed. Store these values in variables.

```
let submit_btn = document.getElementById("submitButton");


function submitSubscriptionForm(event){
   event.preventDefault();


   let first_name = event.target['firstName'].value;
   let last_name = event.target['lastName'].value;
   let email = event.target['emailAddress'].value;
   let suggestion = event.target['suggestion'].value;


   submitSubscription(first_name, last_name, email, suggestion)
}
```

#### Step 6: Trigger the Function to INSERT in Supabase
- Using the Supabase JavaScript client library, trigger the function to insert the user’s subscription information into the Supabase table. Make sure to exclude the .select() statement at the end to prevent retrieving unnecessary data.
- Here, I commented the .select() line. If the select line is present, it will try to return the data that has been entered. Here, we don’t want any user to fetch the data so we don’t have an RSL that allows users to fetch the data, so an error will be returned if you keep the .select() statement present.

``` 
const SUPABASE_URL = '<your project url>'
const SUPABASE_ANON_KEY = '<your anon key>'

const _supabase = supabase.createClient(SUPABASE_URL, SUPABASE_ANON_KEY)

let submit_btn = document.getElementById("submitButton");

function submitSubscriptionForm(event){
   event.preventDefault();


   let first_name = event.target['firstName'].value;
   let last_name = event.target['lastName'].value;
   let email = event.target['emailAddress'].value;
   let suggestion = event.target['suggestion'].value;


   submitSubscription(first_name, last_name, email, suggestion)
}


async function submitSubscription(first, last, email, remark){


   const { data, error } = await _supabase
   .from('subscribe_email')
   .insert([ { first_name: first, last_name: last, email, remark }])
   // .select();


}
```

Ref: https://github.com/supabase/examples-archive/tree/main/supabase-js-v1/auth/javascript-auth