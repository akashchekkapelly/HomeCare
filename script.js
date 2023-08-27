$(document).ready(function () {

    var serviceDivs = ["#serviceDiv1", "#serviceDiv2", "#serviceDiv3", "#serviceDiv4", "#serviceDiv5", "#serviceDiv6", "#serviceDiv7", "#serviceDiv8"];
    var serviceDivContents = ["#serviceDivContent1", "#serviceDivContent2", "#serviceDivContent3", "#serviceDivContent4", "#serviceDivContent5", "#serviceDivContent6", "#serviceDivContent7", "#serviceDivContent8"]

    serviceDivs.map((clickedDiv) => {
        $(clickedDiv).click(function () {
            serviceDivs.map((div, index) => {
                if (div == clickedDiv) {
                    $(div).addClass("selectedService");
                    $(div).removeClass("notSelectedService");

                    serviceDivContents.map((content, index1) => {
                        if (index1 == index) {
                            $(content).addClass("d-flex");
                            $(content).removeClass("d-none");
                        }
                        else {
                            $(content).addClass("d-none");
                            $(content).removeClass("d-flex");
                        }
                    })
                }
                else {
                    $(div).addClass("notSelectedService");
                    $(div).removeClass("selectedService");
                }
            });
        });
    })

    var featuredImages = ["featuredImg1","featuredImg2","featuredImg3","featuredImg4","featuredImg5","featuredImg6","featuredImg7","featuredImg8","featuredImg9"];
    var featuredImgContent = [
        {
            'head':'Tranquil Garden Retreat',
            'body':'Transformed a barren backyard into a lush, serene garden retreat. Installed a meandering stone pathway, vibrant flower beds, and a cozy seating area, creating a peaceful oasis right at home.'
        },
        {
            'head':'Modern Minimalist Living Room',
            'body':'Revamped a cluttered living room into a modern, minimalist masterpiece. Updated furniture, added strategic lighting, and incorporated sleek design elements to create an open and inviting space.'
        },
        {
            'head':'Seamless Smart Home Integration',
            'body':'Provided comprehensive TotalTech Support by seamlessly integrating smart home devices. From voice-controlled lighting to home security systems, we turned a house into a cutting-edge smart home.'
        },
        {
            'head':'Elegant Victorian Restoration',
            'body':'Restored the elegance of a Victorian-era home while preserving its historical charm. Renovated intricate woodwork, refurbished original fixtures, and revitalized the façade for a timeless yet refreshed look.'
        },
        {
            'head':'Contemporary Kitchen Remodel',
            'body':'Completely transformed a dated kitchen into a contemporary culinary haven. Installed modern appliances, granite countertops, and a spacious island, making cooking and entertaining a joy.'
        },
        {
            'head':'Cozy Home Office Setup',
            'body':'Designed a functional home office that balances productivity and comfort. Tailored furniture, optimal lighting, and clever storage solutions transformed a spare room into a productive workspace.'
        },
        {
            'head':'SafeGuard Security Upgrade',
            'body':'Upgraded a homes security infrastructure to ensure peace of mind. Installed state-of-the-art surveillance cameras, motion sensors, and a smart lock system for enhanced protection.'
        },
        {
            'head':'QuickFix Handyman Magic',
            'body':'Handled a variety of odd jobs, from assembling furniture to hanging artwork. Transformed a space by taking care of the small details that make a big difference in creating a harmonious environment.'
        },
        {
            'head':'SparklingSpaces Complete Cleanse',
            'body':'Provided a deep cleaning that left the entire home sparkling. From carpets to windows, every nook and cranny was meticulously cleaned, transforming the living environment into a pristine haven.'
        }
    ]
    featuredImages.map((img,index)=>{
        $('#'+img).click(function(){
            $('.imgModal').css({
                'background-image': 'url(Images/'+img+'.jpg)',
                'background-size': 'cover',
                'background-repeat': 'no-repeat',
                'background-position': 'center',
            });

            featuredImgContent.map((content, index1)=>{
                if(index1==index){
                    $('#imgHead').html(content.head);
                    $('#imgBody').html(content.body);
                }
            });
    
            $('.imgModal').removeClass('d-none'); 
        });
    });

    $('#imgModalCloseBtn').click(function(){
        $('.imgModal').addClass('d-none');  
    });

    $('#menuBtn').click(function(){
        if($('.line1').hasClass('change1')){
            $('.line1').removeClass('change1');
            $('.line2').removeClass('change2');
            $('.line3').removeClass('change3');
            $('#menuDiv').addClass('d-none');
        }
        else{
            $('.line1').addClass('change1');
            $('.line2').addClass('change2');
            $('.line3').addClass('change3');
            $('#menuDiv').removeClass('d-none');       
        }
    });

    $('#homeBtn').click(function() {
        window.location.href = 'index.html';
    });

    $('#aboutUsBtn').click(function() {
        window.location.href = 'aboutus.html';
    });

    $('#contactUsBtn').click(function() {
        window.location.href = 'contactus.html';
    });

    window.onscroll = function () {
        var scrollposition = parseInt(document.documentElement.scrollTop);
        //console.log(scrollposition);

        if (scrollposition > 80) {
            //$('.navbarSection').addClass('col-12 d-flex justify-content-center');
            $('#navbarMainDiv').removeClass('col-12');
            $('#navbarMainDiv').addClass('col-9 position-fixed m-2 boxShadow rounded');
            $('#navbarSubDiv').removeClass('col-lg-9 col-11');
            $('#navbarSubDiv').addClass('col-11');
            $('#navbarLogo').removeClass('col-md-2 col-3');
            $('#navbarLogo').addClass('col-md-1 col-2');
        }
        else {
            //$('.navbarSection').removeClass('col-12 d-flex justify-content-center');
            $('#navbarMainDiv').removeClass('col-9 position-fixed m-2 boxShadow rounded');
            $('#navbarMainDiv').addClass('col-12');
            $('#navbarSubDiv').removeClass('col-11');
            $('#navbarSubDiv').addClass('col-lg-9 col-11');
            $('#navbarLogo').removeClass('col-md-1 col-2');
            $('#navbarLogo').addClass('col-md-2 col-3');
        }
    }
});