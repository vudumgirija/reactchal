export default function About(){
    return (
        <div>
        <h1>React Router Application</h1>
          <p>Create an application in which user can view articles on different topics.
             The application should have the following links :
        </p>
        <div>
            <ul>
                <li>About</li>
                <li>Articles</li>
                <li>Categories</li>
                <li>Subscribe</li>
            </ul>
        </div>
        <div>
            <strong>Description:-</strong>
            <ul>
                <li>
                    <p><span><strong>About</strong></span>: Clicking on this link should render a component which will give a brief description of the application.</p>
                </li>
                <li>
                    <p><span><strong>Articles</strong></span>: Clicking on this link should render a component which will contain titles of different articles. Clicking on the title should display the entire article.</p>
                </li>
                <li>
                    <p><span><strong>Categories</strong></span>This section contains different categories of articles. User can select any one of the categories.</p>
                </li>
                <li>
                    <p><span><strong>Subscribe</strong></span>This section contains a single input field and a button. The user will enter the email in the input field.</p>
                </li>
            </ul>
        </div>
        <div>
            <strong>Footer Section</strong>
            <p>There should be two buttons in the footer section, <strong>back and next</strong>. </p>
            <p>By clicking on back button, previously visited component should be rendered. Next button will be used to go back to the current component.</p>
        </div>
    </div>
    )
}