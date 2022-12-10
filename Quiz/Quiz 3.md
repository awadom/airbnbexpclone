1. What do props help us accomplish?
   My answer:
   Props help us have reusable components by letting us pass unique elements to a component.
   Exempler:
   Make a component more reusable.

2. How do you pass a prop into a component?
   label the different aspect of the prop and the values in the function call for the component in App.js then declare the prop in the component function and use the prop in the component like {prop.name} etc.
   Exempler:
   <MyAwesomeHeader title="???">

3. Can I pass a custom prop (e.g. `blahblahblah={true}`) to a native
   DOM element? (e.g. <div blahblahblah={true}>) Why or why not?
   My answer:
   Not sure
   Exempler:
   No, because the JSX we use to describe native DOM elements will be turned into REAL DDOM elements by React. Real DOM elements only have the properties/attributes specified in the HTML specification. (which does not include properties like 'blahblah')

4. How do I receive props in a component?
   function Navbar() {
   return (
   <header>
   ...
   </header>
   )
   }
   My Answer:
   pass the props in the function:
   function Navbar(props) {
    return(
      {props.name}
    )
   }

   Exempler:

5. What data type is `props` when the component receives it?
   My Answer:
   Object
   Exempler:
