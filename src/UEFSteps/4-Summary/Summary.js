import React, { Component } from 'react';
import { Link } from 'react-router-dom';

const samplePlan = [{
    category: "Health",
    carrier: "Kaiser Permanente",
    planName: "Silver Full PPO 2000/45 OffEx",
    benefits: [{
        label: "Overview",
        list: [
            "Plan type:PPO",
            "Annual deductible:$0 per individual | $0 per family",
            "Doctor visits:$15",
            "Generic drugs:$5",
            "Out-of-Network coverage:Yes",
            "Out-of-Pocket limit:$3,350 per individual | $6,700 per family",
            "Health Savings Account (HSA) eligible:No"
        ],
    }, {
        label: "Cost",
        list: [
            "First month:$381.72",
            "Each month after: $287.31/mo"
        ]
    }]
}, {
    category: "Dental",
    carrier: "Blue Cross Blue Shield of California",
    planName: "Silver Full PPO 2000/45 OffEx",
    benefits: [{
        label: "Overview",
        list: [
            "Annual max:$1500",
            "Cleaning:No Charge" 
        ],
    }, {
        label: "Cost",
        list: [
            "Monthly:$22.64"
        ]
    }]              
}, {
    category: "Vision",
    carrier: "Blue Cross Blue Shield of California",
    planName: "Preferred Vision",
    benefits: [{
        label: "Overview",
        list: [
            "Doctor visits:$10",
            "Frame allowance:$120" 
        ],
    }, {
        label: "Cost",
        list: [
            "Monthly:$3.45"
        ]
    }]
}];

class Summary extends Component {
    constructor(props) {
        super(props);
        this.state = {
            
        };
    }

    render() {    
        return (
            <div className="modal">
                <header className="modal__header flex justify-center">
                  <div className="wrapper">
                    <Link to="/">
                      <svg className="cursor-pointer" width="125" height="28" viewBox="0 0 515 116" xmlns="http://www.w3.org/2000/svg">
                        <g fill="#ffffff" fillRule="evenodd">
                          <path d="M418.35 3.793h12.951v40.012a37.377 37.377 0 0 1 2.738-3.232 40.9 40.9 0 0 1 6.014-5.165c2.267-1.584 4.86-2.782 7.784-3.571 2.885-.786 6.101-1.17 9.63-1.17 2.456 0 4.789.205 7.018.6 2.228.401 4.311.994 6.246 1.792a28.53 28.53 0 0 1 5.396 2.894 26.313 26.313 0 0 1 4.535 3.913 27.799 27.799 0 0 1 3.598 4.827h.007a31.742 31.742 0 0 1 2.635 5.641 36.19 36.19 0 0 1 1.603 6.361c.357 2.228.546 4.535.546 6.932v50.519h-14.039V66.552c0-3.59-.463-6.776-1.375-9.587-.905-2.79-2.254-5.203-4.05-7.252a16.835 16.835 0 0 0-6.51-4.55c-2.584-1.027-5.586-1.541-9.003-1.541-1.635 0-3.197.141-4.702.428a22.974 22.974 0 0 0-4.357 1.266 21.061 21.061 0 0 0-3.889 2.042 20.757 20.757 0 0 0-3.351 2.785 19.891 19.891 0 0 0-2.734 3.467A23.192 23.192 0 0 0 433 57.703a25.296 25.296 0 0 0-1.269 4.652 29.704 29.704 0 0 0-.43 5.118v46.673H417.27V3.793h1.08zm-70.497 0h12.951v110.353h-14.042V3.793h1.091zm-52.05 112.043c-1.886 0-3.773-.128-5.652-.397a40.644 40.644 0 0 1-5.579-1.181 31.566 31.566 0 0 1-5.265-2.015 28.33 28.33 0 0 1-4.646-2.865 25.914 25.914 0 0 1-3.92-3.673 25.794 25.794 0 0 1-3.065-4.445c-.906-1.626-1.57-3.391-2.016-5.286-.44-1.881-.667-3.886-.667-6.02v-.298c0-2.236.213-4.336.642-6.296a23.325 23.325 0 0 1 1.933-5.516 23.13 23.13 0 0 1 3.142-4.666 23.929 23.929 0 0 1 4.205-3.811 32.29 32.29 0 0 1 5.148-2.957 40.163 40.163 0 0 1 5.982-2.139c2.119-.579 4.374-1.01 6.725-1.309a60.993 60.993 0 0 1 7.343-.429c2.574 0 4.988.083 7.233.239 2.254.154 4.342.39 6.261.707 1.889.304 3.759.667 5.607 1.08v.012a92.79 92.79 0 0 1 4.142 1.016v-1.033c0-3.41-.491-6.393-1.477-8.949-.958-2.516-2.406-4.629-4.316-6.329-1.93-1.715-4.288-3.007-7.038-3.87-2.789-.878-6.004-1.319-9.639-1.319-2.323 0-4.537.124-6.628.378a42.316 42.316 0 0 0-5.947 1.119 67.507 67.507 0 0 0-5.629 1.783 67.905 67.905 0 0 0-5.515 2.31l-1.071.511-.415-1.121-3.53-9.705-.352-.937.902-.419a96.345 96.345 0 0 1 6.752-2.813 84.23 84.23 0 0 1 6.825-2.185c2.311-.626 4.789-1.095 7.441-1.405a70.811 70.811 0 0 1 8.395-.477c5.761 0 10.843.75 15.243 2.249 4.451 1.523 8.206 3.808 11.243 6.85 2.88 2.88 5.049 6.35 6.491 10.42 1.426 4.019 2.146 8.605 2.146 13.754v49.747h-13.881v-9.988a35.6 35.6 0 0 1-3.086 2.935c-1.903 1.621-4.051 3.125-6.452 4.521-2.422 1.41-5.154 2.475-8.166 3.175-2.999.696-6.286 1.047-9.849 1.047zm2.31-11.721c1.798 0 3.532-.123 5.189-.372a30.818 30.818 0 0 0 4.792-1.116 27.183 27.183 0 0 0 4.31-1.79 23.472 23.472 0 0 0 3.743-2.427 19.338 19.338 0 0 0 3.067-2.957h.007a19.908 19.908 0 0 0 2.335-3.455 16.49 16.49 0 0 0 1.462-3.889c.321-1.352.489-2.789.489-4.313v-6.559a150.527 150.527 0 0 0-3.951-.972c-1.678-.372-3.46-.743-5.322-1.1a56.436 56.436 0 0 0-6.029-.786c-2.137-.18-4.425-.261-6.865-.261-3.602 0-6.797.351-9.554 1.047-2.744.709-5.07 1.751-6.98 3.125-1.88 1.357-3.296 2.941-4.229 4.727-.927 1.776-1.4 3.772-1.4 6.024v.305c0 1.159.13 2.246.382 3.261.246 1.023.61 2.002 1.108 2.918a13.461 13.461 0 0 0 1.774 2.557c.664.766 1.43 1.462 2.292 2.086a18.74 18.74 0 0 0 2.83 1.673c1.01.492 2.09.9 3.237 1.242 1.145.343 2.336.612 3.554.774a27.39 27.39 0 0 0 3.759.258zM196.075 79.193c.201 1.608.5 3.132.905 4.594a27.602 27.602 0 0 0 1.934 5.07c.798 1.594 1.69 3.058 2.696 4.374a24.838 24.838 0 0 0 3.355 3.615 27.726 27.726 0 0 0 3.916 2.864 26.201 26.201 0 0 0 4.372 2.084v.004c1.518.561 3.082.993 4.69 1.275 1.606.284 3.249.427 4.932.427 2.7 0 5.197-.254 7.487-.74 2.281-.497 4.373-1.237 6.258-2.219 3.856-2.007 7.378-4.656 10.576-7.955l.731-.752.783.702 7.384 6.617.802.728-.714.81a52.224 52.224 0 0 1-6.564 6.231h-.009a48.135 48.135 0 0 1-7.432 4.863c-2.659 1.405-5.625 2.468-8.909 3.166-3.26.7-6.83 1.049-10.694 1.049-5.585 0-10.859-1.033-15.817-3.097a39.456 39.456 0 0 1-6.963-3.72 38.657 38.657 0 0 1-6.023-4.987 39.02 39.02 0 0 1-4.968-6.197 44.21 44.21 0 0 1-3.809-7.319 42.104 42.104 0 0 1-2.427-8.294c-.544-2.906-.814-5.923-.814-9.058 0-5.869.976-11.41 2.92-16.624a44.45 44.45 0 0 1 3.495-7.297 40.491 40.491 0 0 1 4.643-6.288 37.872 37.872 0 0 1 5.73-5.18 38.724 38.724 0 0 1 6.714-3.941 36.116 36.116 0 0 1 7.566-2.499c2.628-.561 5.367-.832 8.211-.832 6.007 0 11.402 1.138 16.167 3.414a37.019 37.019 0 0 1 6.59 4.028 35.617 35.617 0 0 1 5.481 5.268 37.536 37.536 0 0 1 4.328 6.38 44.749 44.749 0 0 1 3.115 7.381 51.27 51.27 0 0 1 1.888 8.143c.42 2.802.624 5.695.624 8.667v1.769c0 .337-.016.727-.04 1.168a24.43 24.43 0 0 1-.118 1.336l-.102.972h-62.89zm48.848-11.72a34.704 34.704 0 0 0-.665-3.936 34.268 34.268 0 0 0-1.456-4.832 29.843 29.843 0 0 0-2.091-4.398 25.59 25.59 0 0 0-2.725-3.833 21.123 21.123 0 0 0-3.337-3.15 22.343 22.343 0 0 0-4-2.425 20.646 20.646 0 0 0-4.624-1.532c-1.643-.34-3.421-.512-5.301-.512-3.231 0-6.278.634-9.105 1.906a22.998 22.998 0 0 0-4.005 2.299 23.306 23.306 0 0 0-3.499 3.069h-.005a28.6 28.6 0 0 0-2.978 3.794 34.416 34.416 0 0 0-2.44 4.456 32.083 32.083 0 0 0-1.766 4.958 36.304 36.304 0 0 0-.847 4.136h48.844zm136.393-21.018h-15.448V33.798h15.448V14.15h14.042v19.648h16.535v12.657h-16.535v43.967c0 2.332.288 4.306.867 5.909.537 1.524 1.351 2.722 2.409 3.555 1.008.805 2.171 1.423 3.487 1.872 1.345.444 2.831.714 4.475.793l1.033.047v12.856l-1.049.04a35.88 35.88 0 0 1-6.46-.282v-.005a29.03 29.03 0 0 1-4.474-.952 20.88 20.88 0 0 1-4.084-1.689 18.635 18.635 0 0 1-3.497-2.471 17.3 17.3 0 0 1-2.846-3.303 21.232 21.232 0 0 1-2.129-4.113 24.703 24.703 0 0 1-1.324-4.962c-.304-1.792-.45-3.707-.45-5.753V46.455zM86.126 3.793h13.251v48.274h60.035V3.793h14.347v110.353h-14.347V65.643H99.377v48.503h-14.34V3.793h1.089zM14.33 67.473c.205-1.415.49-2.8.847-4.136a31.976 31.976 0 0 1 1.765-4.958 34.07 34.07 0 0 1 2.443-4.456 28.575 28.575 0 0 1 2.974-3.794h.009a23.243 23.243 0 0 1 3.497-3.069 22.763 22.763 0 0 1 4.003-2.299c2.831-1.272 5.872-1.906 9.103-1.906 1.885 0 3.658.172 5.302.512 1.651.345 3.195.854 4.627 1.532a22.593 22.593 0 0 1 4.004 2.425 21.493 21.493 0 0 1 3.333 3.15 25.518 25.518 0 0 1 2.725 3.833 30.469 30.469 0 0 1 2.093 4.398 34.392 34.392 0 0 1 1.454 4.832 35.62 35.62 0 0 1 .667 3.936H14.33zm60.634-10.335a44.331 44.331 0 0 0-3.118-7.381 37.633 37.633 0 0 0-4.324-6.38 35.502 35.502 0 0 0-5.484-5.268 36.974 36.974 0 0 0-6.589-4.028c-4.766-2.276-10.16-3.414-16.171-3.414-2.838 0-5.579.271-8.205.832a36.04 36.04 0 0 0-7.566 2.499 38.722 38.722 0 0 0-6.718 3.941 37.899 37.899 0 0 0-5.727 5.18 40.439 40.439 0 0 0-4.645 6.288 45.378 45.378 0 0 0-3.5 7.297C.978 61.918 0 67.459 0 73.328c0 3.135.276 6.152.812 9.058a41.983 41.983 0 0 0 2.434 8.294 43.524 43.524 0 0 0 3.805 7.319 38.931 38.931 0 0 0 4.972 6.197 38.744 38.744 0 0 0 6.016 4.987 39.677 39.677 0 0 0 6.964 3.72C29.965 114.967 35.237 116 40.824 116c3.865 0 7.436-.349 10.696-1.049 3.278-.698 6.246-1.761 8.909-3.166a48.358 48.358 0 0 0 7.43-4.863h.01a52.293 52.293 0 0 0 6.564-6.231l.717-.81-.805-.728-7.387-6.617-.779-.702-.733.752c-3.196 3.299-6.719 5.948-10.574 7.955-1.889.982-3.977 1.722-6.257 2.219-2.292.486-4.791.74-7.49.74-1.683 0-3.327-.143-4.93-.427a26.797 26.797 0 0 1-4.692-1.275v-.004a26.123 26.123 0 0 1-4.368-2.084 27.253 27.253 0 0 1-3.92-2.864 24.66 24.66 0 0 1-3.353-3.615c-1.006-1.316-1.903-2.78-2.701-4.374a27.825 27.825 0 0 1-1.936-5.07 33.773 33.773 0 0 1-.902-4.594h62.892l.105-.972c.052-.474.09-.923.116-1.336.022-.441.039-.831.039-1.168v-1.769c0-2.972-.203-5.865-.625-8.667a51.486 51.486 0 0 0-1.886-8.143zM500.846 11.783h2.126c1.733 0 2.058-1.219 2.058-1.928 0-1.865-1.286-1.865-1.996-1.865h-2.188v3.793zm-2.574-5.981h4.7c1.605 0 4.757 0 4.757 3.602 0 2.511-1.605 3.024-2.571 3.346 1.864.128 1.994 1.352 2.25 3.087.13 1.095.321 2.962.707 3.605h-2.893c-.064-.643-.517-4.118-.517-4.313-.191-.77-.449-1.156-1.415-1.156h-2.377v5.469h-2.641V5.802zm-5.631 6.789c0 5.66 4.572 10.229 10.169 10.229 5.663 0 10.229-4.666 10.229-10.229 0-5.665-4.634-10.167-10.229-10.167-5.535 0-10.169 4.44-10.169 10.167zm22.359.03c0 6.693-5.466 12.16-12.158 12.16-6.629 0-12.161-5.403-12.161-12.16 0-6.884 5.661-12.16 12.161-12.16C509.404.461 515 5.737 515 12.621z"></path>
                        </g>
                      </svg>
                    </Link>
                  </div>
                </header>

                <div className="modal__body">
                    <section className="step wrapper step--summary">
                        <div className="step__headline w-2-3 pr-lg">
                            <h1 data-step-num="Final Step" className="step__title text-display mb-sm">Just need your review.</h1>
                            <h2 className="h2 font-normal mb-md">Here is your customized health plan.</h2>
                            <div className="application-actions flex justify-end mb-xxs">                                
                                <button className="button">Email</button>
                                <button className="button">Download</button>
                            </div>
                            <section className="step__application">
                                {samplePlan.map(({ category, carrier, planName, benefits }, i) => (
                                    <div key={i} className="app-group">
                                        <div className="app-group__category h4">{category}</div>
                                        <h3 className="app-group__category-plan mb-xxs">{carrier}</h3>
                                        <p className="subtitle mb-base">{planName}</p>
                                        {benefits.map((benefit, i) => {
                                            return (
                                                <dl key={i}>
                                                    <dt className="uppercase bodySmall">{benefit.label}</dt>
                                                    {benefit.list.map((item, i) => {
                                                        const textArr = item.split(':');
                                                        return (
                                                            <dd key={i}>
                                                                <span>{textArr[0]}</span>
                                                                <span className="font-semibold">{textArr[1]}</span>
                                                            </dd>
                                                        );
                                                    })}
                                                </dl>
                                            );
                                        })}
                                </div>
                                ))}
                            </section>
                        </div>
                        <div className="step__sidebar w-1-3">
                            <div className="enrollment">
                                <div className="cost">
                                    <div className="cost__price flex items-end">
                                        <span className="h3">Total</span>
                                        <h1 className="text-display">$320</h1>
                                        <span className="h5">/mo</span>
                                    </div>
                                    <button className="enrollment__button button button-xlg w-full">Enroll</button>
                                </div>
                            </div>
                        </div>  
                    </section>
                    
                    <div className="wrapper pb-xl">
                        <p className="caption my-sm">
                        IMPORTANT NOTICES AND DISCLAIMERS
                        </p>
                        <p className="caption my-sm">
                        The rates and details shown above are estimates and are not guaranteed to match the final rates and details of your policy. Many factors can cause the estimated rates above to differ from the actual cost of your policy. Some factors involve changes in your application or group – for example if your group’s application has a different number of employees, or employees with different ages or other characteristics than you entered, then the rates for your policy will change from the above estimates. In addition, even if your group characteristics do not change, insurance companies periodically update their rates, particularly at the end of calendar years. Your actual policy rate will typically depend on the actual date your policy begins (not the date on which you apply or the date you request the policy to begin). For example, if you requested estimated rates in the last couple of months of 2017 for a policy beginning in 2018, the estimated rates above may reflect 2017 rates if the 2018 rates are in the process of being updated and are not yet available to our system for generating the estimated rates above. Other information, such as plan names, benefits, and availability, also change periodically (particularly at the end of calendar years) and this page may not immediately reflect such pending changes.
                        </p>
                        <p className="caption my-sm">
                        *	Quoted rates are based off of the age at the time of enrollment. Due to a Blue Shield of CA (BSC) system issue, members enrolled midyear will be rated based on the age at the time of when the group was enrolled or the group's last renewal. This will result in a lower rate being billed by BSC until the group's next renewal. They are working to resolve this issue. If you have any questions, please contact your BSC representative.
                        </p>
                        <p className="caption my-sm">
                        About the Benefits Summary
                        </p>
                        <p className="caption my-sm">
                        The benefits matrix is a summary for information purposes only. Please review the Evidence of Coverage and Plan Contract (Policy) for a detailed description of coverage benefits, limitations and exclusions. Only the Terms and Conditions of Coverage Benefits listed in the policy are binding.
                        </p>
                        <p className="caption my-sm">
                        The benefits listed are contingent on your use of physicians, hospitals, and services within the provider network for the specified health plan.
                        </p>
                    </div>
                </div>
            </div>
        );
    }
}

export default Summary;