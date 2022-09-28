window.onload = function(){
    var novena1Pic = document.getElementById("novena1Pic");
    var Novena1 = document.getElementById("Novena1");
    var Novena1A = document.getElementById("Novena1A");
    var N1Button = document.getElementById("N1Button");
    var Novena1sub = document.getElementById("Novena1sub");
    var Novena1subA = document.getElementById("Novena1subA");


    var novena2Pic = document.getElementById("novena2Pic");
    var Novena2 = document.getElementById("Novena2");
    var Novena2A = document.getElementById("Novena2A");
    var N2Button = document.getElementById("N2Button");
    var Novena2sub = document.getElementById("Novena2sub");
    var Novena2subA = document.getElementById("Novena2subA");

    var Novena3 = document.getElementById("Novena3");
    var Novena3A = document.getElementById("Novena3A");
    var N3Button = document.getElementById("N3Button");
    var Novena3sub = document.getElementById("Novena3sub");
    var Novena3subA = document.getElementById("Novena3subA");
    var novena3Pic = document.getElementById("novena3Pic");



    const novenaDay = new Date().toLocaleString().split(',')[0];


    function MaryOfKnots(){
        Novena1.innerHTML = 'Mary UnDoer Of Knots <br> September 20 - 28'
        Novena1A.innerHTML = 'Starts the 20th!'
        Novena1sub.innerHTML = 'Feast Day <br> September 28'
        Novena1subA.innerHTML = 'Virgin Mary, Mother of fair love, Mother who never refuses to come to the aid of a child in need, Mother whose hands never cease to serve your beloved children because they are moved by the divine love and immense mercy that exists in your heart, cast your compassionate eyes upon me and see the snarl of knots that exist in my life. You know very well how desperate I am, my pain and how I am bound up by the Knots. Mary, Mother to whom God entrusted the undoing of the knots in the lives of his children, I entrust into your hands the ribbon of my life. No one, not even the Evil One himself, can take it away from your precious care. In your hands there is no knot that cannot be undone. Powerful Mother, by your grace and intercessory power with Your Son and My Liberator, Jesus, take into your hands today this knot… I beg you to undo it for the glory of god, once and for all. You are my hope. O my Lady, you are the only consolation God gives me, the fortification of my feeble strength, the enrichment of my destitution and with Christ the freedom from my chains. Hear my plea Keep me, guide me, protect me, o safe refuge. <br> (Mention your request here…) <br> Say 1: Our Father… Say 1: Hail Mary… Say 1: Glory Be…'
        novena1Pic.src = './MaryUndoer.png';
    }

    function michaelArchAngel(){
        Novena2.innerHTML = 'St. Michael The Archangel <br> September 21 - 29'
        Novena2A.innerHTML = 'Starts the 21st!'
        Novena2sub.innerHTML = 'Feast Day <br> September 29'
        Novena2subA.innerHTML = 'Let us begin, In the name of the Father, and of the Son, and of the Holy Spirit. Amen. O glorious prince Saint Michael, chief and commander of the heavenly hosts, guardian of souls, vanquisher of rebel spirits, servant in the house of the Divine King and our admirable conductor, you who shine with excellence and superhuman virtue deliver us from all evil, who turn to you with confidence and enable us by your gracious protection to serve God more and more faithfully every day. Pray for us, O glorious Saint Michael, Prince of the Church of Jesus Christ, that we may be made worthy of His promises. <br> (Mention your request here…) <br> Almighty and Everlasting God, Who, by a prodigy of goodness and a merciful desire for the salvation of all men, has appointed the most glorious Archangel Saint Michael Prince of Your Church, make us worthy, we ask You, to be delivered from all our enemies, that none of them may harass us at the hour of death, but that we may be conducted by him into Your Presence. This we ask through the merits of Jesus Christ Our Lord. Amen. Saint Michael the Archangel, defend us in battle, be our protection against the wickedness and snares of the devil. May God rebuke him we humbly pray; and do thou, O Prince of the Heavenly host, by the power of God, cast into Hell Satan and all evil spirits who prowl about the world seeking the ruin of souls. Amen. Say 1: Our Father… Say 1: Hail Mary… Say 1: Glory Be…'
        novena2Pic.src = './St. Michael Archangel.jpg';
    }

    function therese(){
        Novena3.innerHTML = 'St. Therese <br> September 23 - October 1'
        Novena3A.innerHTML = 'Starts the 23rd!'
        Novena3sub.innerHTML = 'Feast Day <br> October 1'
        Novena3subA.innerHTML = ' In the name of the Father, and of the Son, and of the Holy Spirit. Amen. O Little Therese of the Child Jesus, please pick for me a rose from the heavenly gardens and send it to me as a message of love. O Little Flower of Jesus, ask God to grant the favors I now place with confidence in your hands <br> (Mention your request here…) <br> St. Therese, help me to always believe as you did in God’s great love for me, so that I might imitate your “Little Way” each day. Amen <br> Say 1: Our Father… Say 1: Hail Mary…Say 1: Glory Be…'
        novena3Pic.src = './Therese.jpg';
    }

    function faustina(){
        Novena1.innerHTML = 'St. Faustina <br> September 27 - October 5'
        Novena1A.innerHTML = 'Starts the 27th!'
        Novena1sub.innerHTML = 'Feast Day <br> October 5'
        Novena1subA.innerHTML = ' In the name of the Father, and of the Son, and of the Holy Spirit. Amen. O Jesus, who filled Saint Faustina with profound veneration for Your boundless Mercy, deign, if it be Your holy will, to grant me, through her intercession, the grace for which I fervently pray… <br> (Mention your request here…) <br> My sins render me unworthy of Your Mercy, but be mindful of Saint Faustina spirit of sacrifice and self-denial, and reward her virtue by granting the petition which, with childlike trust, I present to You through her intercession. Saint Faustina, pray for us. <br> Say 1: Our Father…  Say 1: Hail Mary… Say 1: Glory Be…'
        novena1Pic.src = './Fpic3.jpg';
    }
    
    //MARY UNDOER OF KNOTS
    if (novenaDay == '9/15/2022') {
        MaryOfKnots();
        Novena1A.innerHTML = 'Starts the 20th!';
    }
    else if (novenaDay == '9/16/2022') {
        MaryOfKnots();
        Novena1A.innerHTML = 'Starts the 20th!';
    }
    else if (novenaDay == '9/17/2022') {
        MaryOfKnots();
        Novena1A.innerHTML = 'Starts the 20th!';
    }
    else if (novenaDay == '9/18/2022') {
        MaryOfKnots();
        Novena1A.innerHTML = 'Starts the 20th!';
    }
    else if (novenaDay == '9/19/2022') {
        MaryOfKnots();
        Novena1A.innerHTML = 'Starts the 20th!';
    }
    else if (novenaDay == '9/20/2022') {
        MaryOfKnots();
        Novena1A.innerHTML = 'Day 1';
    }
    else if (novenaDay == '9/21/2022') {
        MaryOfKnots();
        Novena1A.innerHTML = 'Day 2';
    }
    else if (novenaDay == '9/22/2022') {
        MaryOfKnots();
        Novena1A.innerHTML = 'Day 3';
    }
    else if (novenaDay == '9/23/2022') {
        MaryOfKnots();
        Novena1A.innerHTML = 'Day 4';
    }
    else if (novenaDay == '9/24/2022') {
        MaryOfKnots();
        Novena1A.innerHTML = 'Day 5';
    }
    else if (novenaDay == '9/25/2022') {
        MaryOfKnots();
        Novena1A.innerHTML = 'Day 6';
    }
    else if (novenaDay == '9/26/2022') {
        MaryOfKnots();
        Novena1A.innerHTML = 'Day 7';
    }
    else if (novenaDay == '9/27/2022') {
        MaryOfKnots();
        Novena1A.innerHTML = 'Day 8';
    }
    else if (novenaDay == '9/28/2022') {
        MaryOfKnots();
        Novena1A.innerHTML = 'Day 9';
    }



    //MICHAEL ARCH ANGEL
    if (novenaDay == '9/16/2022'){
        michaelArchAngel()
        Novena2A.innerHTML = 'Starts the 21st!'
    }
    else if (novenaDay == '9/17/2022'){
        michaelArchAngel()
        Novena2A.innerHTML = 'Starts the 21st!'
    }
    else if (novenaDay == '9/18/2022'){
        michaelArchAngel()
        Novena2A.innerHTML = 'Starts the 21st!'
    }
    else if (novenaDay == '9/19/2022'){
        michaelArchAngel()
        Novena2A.innerHTML = 'Starts the 21st!'
    }
    else if (novenaDay == '9/20/2022'){
        michaelArchAngel()
        Novena2A.innerHTML = 'Starts the 21st!'
    }
    else if (novenaDay == '9/21/2022'){
        michaelArchAngel()
        Novena2A.innerHTML = 'Day 1';
    }
    else if (novenaDay == '9/22/2022'){
        michaelArchAngel()
        Novena2A.innerHTML = 'Day 2';
    }
    else if (novenaDay == '9/23/2022'){
        michaelArchAngel()
        Novena2A.innerHTML = 'Day 3';
    }
    else if (novenaDay == '9/24/2022'){
        michaelArchAngel()
        Novena2A.innerHTML = 'Day 4';
    }
    else if (novenaDay == '9/25/2022'){
        michaelArchAngel()
        Novena2A.innerHTML = 'Day 5';
    }
    else if (novenaDay == '9/26/2022'){
        michaelArchAngel()
        Novena2A.innerHTML = 'Day 6';
    }
    else if (novenaDay == '9/27/2022'){
        michaelArchAngel()
        Novena2A.innerHTML = 'Day 7';
    }
    else if (novenaDay == '9/28/2022'){
        michaelArchAngel()
        Novena2A.innerHTML = 'Day 8';
    }
    else if (novenaDay == '9/29/2022'){
        michaelArchAngel()
        Novena2A.innerHTML = 'Day 9';
    }


        //Therese
    if (novenaDay == '9/21/2022') {
        therese();
        Novena3A.innerHTML = 'Starts the 23rd!';
    }
    else if (novenaDay == '9/22/2022') {
        therese();
        Novena3A.innerHTML = 'Starts the 23rd!';
    }
    else if (novenaDay == '9/23/2022') {
        therese();
        Novena3A.innerHTML = 'Day 1';
    }
    else if (novenaDay == '9/24/2022') {
        therese();
        Novena3A.innerHTML = 'Day 2';
    }
    else if (novenaDay == '9/25/2022') {
        therese();
        Novena3A.innerHTML = 'Day 3';
    }
    else if (novenaDay == '9/26/2022') {
        therese();
        Novena3A.innerHTML = 'Day 4';
    }
    else if (novenaDay == '9/27/2022') {
        therese();
        Novena3A.innerHTML = 'Day 5';
    }
    else if (novenaDay == '9/28/2022') {
        therese();
        Novena3A.innerHTML = 'Day 6';
    }
    else if (novenaDay == '9/29/2022') {
        therese();
        Novena3A.innerHTML = 'Day 7';
    }
    else if (novenaDay == '9/30/2022') {
        therese();
        Novena3A.innerHTML = 'Day 8';
    }
    else if (novenaDay == '10/1/2022') {
        therese();
        Novena3A.innerHTML = 'Day 9';
    }

    //Faustina
    if (novenaDay == '9/29/2022') {
        faustina();
        Novena1A.innerHTML = 'Day 3';
    }
    else if (novenaDay == '9/30/2022') {
        faustina();
        Novena1A.innerHTML = 'Day 4';
    }
    else if (novenaDay == '10/1/2022') {
        faustina();
        Novena1A.innerHTML = 'Day 5';
    }
    else if (novenaDay == '10/2/2022') {
        faustina();
        Novena1A.innerHTML = 'Day 6';
    }
    else if (novenaDay == '10/3/2022') {
        faustina();
        Novena1A.innerHTML = 'Day 7';
    }
    else if (novenaDay == '10/4/2022') {
        faustina();
        Novena1A.innerHTML = 'Day 8';
    }
    else if (novenaDay == '10/5/2022') {
        faustina();
        Novena1A.innerHTML = 'Day 9';
    }
}
