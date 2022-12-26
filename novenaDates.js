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
        novena1Pic.src = './novenaImages/MaryUndoer.png';
    }

    function michaelArchAngel(){
        Novena2.innerHTML = 'St. Michael The Archangel <br> September 21 - 29'
        Novena2A.innerHTML = 'Starts the 21st!'
        Novena2sub.innerHTML = 'Feast Day <br> September 29'
        Novena2subA.innerHTML = 'Let us begin, In the name of the Father, and of the Son, and of the Holy Spirit. Amen. O glorious prince Saint Michael, chief and commander of the heavenly hosts, guardian of souls, vanquisher of rebel spirits, servant in the house of the Divine King and our admirable conductor, you who shine with excellence and superhuman virtue deliver us from all evil, who turn to you with confidence and enable us by your gracious protection to serve God more and more faithfully every day. Pray for us, O glorious Saint Michael, Prince of the Church of Jesus Christ, that we may be made worthy of His promises. <br> (Mention your request here…) <br> Almighty and Everlasting God, Who, by a prodigy of goodness and a merciful desire for the salvation of all men, has appointed the most glorious Archangel Saint Michael Prince of Your Church, make us worthy, we ask You, to be delivered from all our enemies, that none of them may harass us at the hour of death, but that we may be conducted by him into Your Presence. This we ask through the merits of Jesus Christ Our Lord. Amen. Saint Michael the Archangel, defend us in battle, be our protection against the wickedness and snares of the devil. May God rebuke him we humbly pray; and do thou, O Prince of the Heavenly host, by the power of God, cast into Hell Satan and all evil spirits who prowl about the world seeking the ruin of souls. Amen. Say 1: Our Father… Say 1: Hail Mary… Say 1: Glory Be…'
        novena2Pic.src = './novenaImages/St. Michael Archangel.jpg';
    }

    function therese(){
        Novena3.innerHTML = 'St. Therese <br> September 23 - October 1'
        Novena3A.innerHTML = 'Starts the 23rd!'
        Novena3sub.innerHTML = 'Feast Day <br> October 1'
        Novena3subA.innerHTML = ' In the name of the Father, and of the Son, and of the Holy Spirit. Amen. O Little Therese of the Child Jesus, please pick for me a rose from the heavenly gardens and send it to me as a message of love. O Little Flower of Jesus, ask God to grant the favors I now place with confidence in your hands <br> (Mention your request here…) <br> St. Therese, help me to always believe as you did in God’s great love for me, so that I might imitate your “Little Way” each day. Amen <br> Say 1: Our Father… Say 1: Hail Mary…Say 1: Glory Be…'
        novena3Pic.src = './novenaImages/Therese.jpg';
    }

    function faustina(){
        Novena1.innerHTML = 'St. Faustina <br> September 27 - October 5'
        Novena1A.innerHTML = 'Starts the 27th!'
        Novena1sub.innerHTML = 'Feast Day <br> October 5'
        Novena1subA.innerHTML = ' In the name of the Father, and of the Son, and of the Holy Spirit. Amen. O Jesus, who filled Saint Faustina with profound veneration for Your boundless Mercy, deign, if it be Your holy will, to grant me, through her intercession, the grace for which I fervently pray… <br> (Mention your request here…) <br> My sins render me unworthy of Your Mercy, but be mindful of Saint Faustina spirit of sacrifice and self-denial, and reward her virtue by granting the petition which, with childlike trust, I present to You through her intercession. Saint Faustina, pray for us. <br> Say 1: Our Father…  Say 1: Hail Mary… Say 1: Glory Be…'
        novena1Pic.src = './novenaImages/Fpic3.jpg';
    }

    function LadyOfRosary(){
        Novena2.innerHTML = 'Our Lady Of The Rosary <br> September 29 - October 7'
        Novena2A.innerHTML = 'Starts the 29th!'
        Novena2sub.innerHTML = 'Feast Day <br> October 7'
        Novena2subA.innerHTML = 'In the name of the Father, and of the Son, and of the Holy Spirit. Amen. Queen of the Most Holy Rosary, in these times of such brazen impiety, show your power with the signs of your former victories. Look with mercy on the Church of your Son, on His Vicar on earth, and on all the clergy and laity, who are sorely oppressed in this mighty conflict. Powerful vanquisher of all heresies, hasten the hour of mercy even though the hour of God’s justice is every day provoked by the countless sins of men. As I kneel before you in prayer, obtain for me my requests <br> (Mention your request here…) <br> Queen of the Most Holy Rosary, pray for us. <br> Say 1: Our Father…  Say 1: Hail Mary… Say 1: Glory Be…'
        novena2Pic.src = './novenaImages/LadyOfRosary.jpg';
    }

    function teresaOfAvila(){
        Novena3.innerHTML = 'St. Teresa Of Avila <br> October 7 - 15'
        Novena3A.innerHTML = 'Starts the 7th!'
        Novena3sub.innerHTML = 'Feast Day <br> October 15'
        Novena3subA.innerHTML = 'In the name of the Father, and of the Son, and of the Holy Spirit. Amen. O Saint Teresa, seraphic Virgin, beloved spouse of thy crucified Lord, thou who on earth didst burn with a love so intense toward thy God and my God, and now dost glow with a brighter and purer flame in paradise: obtain for me also, I beseech thee, a spark of that same holy fire which shall cause me to forget the world, all things created, and even myself; for thou didst ever avidly desire to see Him loved by all men.  Grant that my every thought and desire and affection may be continually directed to doing the will of God, the supreme Good, whether I am in joy or in pain, for He is worthy to be loved and obeyed forever. Obtain for me this grace, thou who art so powerful with God; may I be all on fire, like thee, with the holy love of God. Amen. <br> (Mention your request here…) <br> Let nothing disturb you, Let nothing frighten you, All things are passing away: God never changes. Patience obtains all things Whoever has God lacks nothing; God alone suffices. <br> Say 1: Our Father…  Say 1: Hail Mary… Say 1: Glory Be…'
        novena3Pic.src = './novenaImages/St. Teresa Of Avila.jpg';
    }

    function johnPaulII(){
        Novena1.innerHTML = 'St. John Paul II <br> October 14 - 22'
        Novena1A.innerHTML = 'Starts the 14th!'
        Novena1sub.innerHTML = 'Feast Day <br> October 22'
        Novena1subA.innerHTML = ' In the name of the Father, and of the Son, and of the Holy Spirit. Amen. Saint John Paul II, you taught the world through word and example that Jesus is the face of the Father’s merciful love. You called upon the world to “be not afraid” and “open wide the doors for Christ.” Now, through your powerful intercession, show us that the love of God is living and active, stronger than all the forces of the world, the flesh, and the devil.  Through your prayers, help us in every need and deliver us from every evil. May we always know by experience the love of God the Father, mediated through Jesus Christ by the power of the Holy Spirit. “God, merciful Father, in your Son, Jesus Christ, you have revealed your love and poured it out upon us in the Holy Spirit, the Comforter. We entrust to you today the destiny of the world and of every man and woman. Bend down to us sinners, heal our weakness, conquer all evil, and grant that all the peoples of the earth may experience your mercy.  In You, the Triune God, may they ever find the source of hope. Eternal Father, by the Passion and Resurrection of your Son, have mercy on us and upon the whole world!” <br> (Mention your request here…) <br> Amen <br> Say 1: Our Father…  Say 1: Hail Mary… Say 1: Glory Be…'
        novena1Pic.src = './novenaImages/JohnPaulII.jpg';
    }

    function jude(){
        Novena2.innerHTML = 'St. Jude <br> October 19 - 28'
        Novena2A.innerHTML = 'Starts the 19th!'
        Novena2sub.innerHTML = 'Feast Day <br> October 28'
        Novena2subA.innerHTML = 'In the name of the Father, and of the Son, and of the Holy Spirit. Amen. Most holy Apostle, St. Jude, faithful servant and friend of Jesus, the Church honors and invokes you universally, as the patron of difficult cases, of things almost despaired of, Pray for me, I am so helpless and alone. Intercede with God for me that He bring visible and speedy help where help is almost despaired of. Come to my assistance in this great need that I may receive the consolation and help of heaven in all my necessities, tribulations, and sufferings, particularly <br> (Mention your request here…) <br> And that I may praise God with you and all the saints forever. I promise, O Blessed St. Jude, to be ever mindful of this great favor granted me by God and to always honor you as my special and powerful patron, and to gratefully encourage devotion to you. Amen <br> Say 1: Our Father… Say 1: Hail Mary… Say 1: Glory Be…'
        novena2Pic.src = './novenaImages/St-Jude.jpg';
    }

    function allSaints(){
        Novena3.innerHTML = 'All Saints <br> October 24 - November 1'
        Novena3A.innerHTML = 'Starts the 24th!'
        Novena3sub.innerHTML = 'Feast Day <br> November 1'
        Novena3subA.innerHTML = 'In the name of the Father, and of the Son, and of the Holy Spirit. Amen. O holy Mary, Mother of God and Mother of the Church, be my mother and guide me to a life of holiness that I may one day join you and your Son in Heaven for all eternity. Intercede on my behalf that I may be a student of your humility and purity. I ask that you place before your Son my petitions. <br> (State your intentions here) <br> Mary, conceived without sin, pray for us. Mary, Most Holy, pray for us. Mary, Most Pure, pray for us. Mary, Star of the Sea, pray for us. Mary, Queen of Heaven and Earth, pray for us. Mary, Queen of Angels and Saints, pray for us. Amen. In the name of the Father, and of the Son, and of the Holy Spirit. Amen.'
        novena3Pic.src = './novenaImages/AllSaints.jpg';
    }

    function martinTours(){
        Novena1.innerHTML = 'St. Martin De Tours <br> November 2 - November 11'
        Novena1A.innerHTML = 'Starts the 2nd!'
        Novena1sub.innerHTML = 'Feast Day <br> November 11'
        Novena1subA.innerHTML = 'Blessed Saint Martín of Tours, full of the Spirit of the Lord always having inexhaustible charity for the needy. You, who full of love and generosity when you saw the beggar that was freezing from cold, without knowing that in truth he was Christ, did not doubt to give him half of your cape, and did not give it completely to him since the other half belonged to the Roman army; you, who did not seek recognition but only to favor your neighbor, found glory before the Lord. And when the Savior appeared to you dressed with the half-cape so as to express appreciation for your gesture and He told you “today you covered me with your mantle”, you decided to no longer serve the army and to dedicate your life to God and to the salvation of souls, being from then on a propagator of the faith and a holy man totally dedicated to whomever was in need. Glorious Saint Martin, you who worked miracles and prodigies, who with joy, amiability and the most exquisite goodness won over the hearts of all and did not cease to ever work for their well being: give me your hand and help me to come out of all lack and scarcity which today afflicts me and weighs me down. Glorious Saint Martin, my blessed patron, I humbly ask you with great faith that you attain from God, the fount of all Mercies that my ways on this earth, my work and my toils be cleansed and opened with clarity. In the name of Omnipotent God, Saint Martin of Tours, remove all that harms me and give me work and prosperity. O blessed relief, give me your saintly protection, assist me, I beg you, in these difficult times: <br> (Mention your request here…) <br> Say 1: Our Father… Say 1: Hail Mary…Say 1: Glory Be…'
        novena3Pic.src = './novenaImages/stmartinTours.jpg';
    }


    function francesXaiver(){
        Novena2.innerHTML = 'St. Frances Xavier <br> November 5 - November 13'
        Novena2A.innerHTML = 'Starts the 5th!'
        Novena2sub.innerHTML = 'Feast Day <br> November 13'
        Novena2subA.innerHTML = 'Fortify me with the grace of Your Holy Spirit and give Your peace to my soul that I may be free from all needless anxiety, solicitude and worry. Help me to desire always that which is pleasing and acceptable to You so that Your will may be my will. Amen <br> (Mention your request here…) St. Frances Cabrini, pray for us <br> Say 1: Our Father… Say 1: Hail Mary…Say 1: Glory Be…'
        novena3Pic.src = './novenaImages/stFrancesCabrini.jpg';
    }


    function gertrude(){
        Novena3.innerHTML = 'St. Gertrude <br> November 8 - November 16'
        Novena3A.innerHTML = 'Starts the 8th!'
        Novena3sub.innerHTML = 'Feast Day <br> November 16'
        Novena3subA.innerHTML = 'O Lord Jesus, by the love Thou didst bear to the virginal heart of Saint Gertrude and by which Thou hast promised that no sinner who would honor and love her should die a sudden and unprovided death, grant me, I beseech Thee, this grace, and let me so love Thee and repent of my sins that with faith and confidence I may expect a happy death. Amen <br> (Mention your request here…) <br> Prayer that was prayed by St. Gertrude for all the souls in Purgatory: “Eternal Father, I offer Thee the Most Precious Blood of Thy Divine Son, Jesus, in union with the Masses said throughout the world today, for all the holy Souls in Purgatory. Amen. Our Lord told St. Gertrude the Great that this prayer would release 1,000 Souls from Purgatory each time it is said. St. Gertrude The Great, pray for us. <br> Say 1: Our Father…  Say 1: Hail Mary… Say 1: Glory Be…'
        novena3Pic.src = './novenaImages/stGertrude.jpg';
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

    //Our Lady Rosary
    if (novenaDay == '9/30/2022'){
        LadyOfRosary()
        Novena2A.innerHTML = 'Day 2'
    }
    else if (novenaDay == '10/1/2022'){
        LadyOfRosary()
        Novena2A.innerHTML = 'Day 3'
    }
    else if (novenaDay == '10/2/2022'){
        LadyOfRosary()
        Novena2A.innerHTML = 'Day 4'
    }
    else if (novenaDay == '10/3/2022'){
        LadyOfRosary()
        Novena2A.innerHTML = 'Day 5'
    }
    else if (novenaDay == '10/4/2022'){
        LadyOfRosary()
        Novena2A.innerHTML = 'Day 6'
    }
    else if (novenaDay == '10/5/2022'){
        LadyOfRosary()
        Novena2A.innerHTML = 'Day 7';
    }
    else if (novenaDay == '10/6/2022'){
        LadyOfRosary()
        Novena2A.innerHTML = 'Day 8';
    }
    else if (novenaDay == '10/7/2022'){
        LadyOfRosary()
        Novena2A.innerHTML = 'Day 9';
    }

    //Teresa Of Avila
    if (novenaDay == '10/2/2022') {
        teresaOfAvila()
        Novena3A.innerHTML = 'Starts the 7th';
    }
    else if (novenaDay == '10/3/2022') {
        teresaOfAvila()
        Novena3A.innerHTML = 'Starts the 7th';
    }
    else if (novenaDay == '10/4/2022') {
        teresaOfAvila()
        Novena3A.innerHTML = 'Starts the 7th';
    }
    else if (novenaDay == '10/5/2022') {
        teresaOfAvila()
        Novena3A.innerHTML = 'Starts the 7th';
    }
    else if (novenaDay == '10/6/2022') {
        teresaOfAvila()
        Novena3A.innerHTML = 'Starts the 7th';
    }
    else if (novenaDay == '10/7/2022') {
        teresaOfAvila()
        Novena3A.innerHTML = 'Day 1';
    }
    else if (novenaDay == '10/8/2022') {
        teresaOfAvila()
        Novena3A.innerHTML = 'Day 2';
    }
    else if (novenaDay == '10/9/2022') {
        teresaOfAvila()
        Novena3A.innerHTML = 'Day 3';
    }
    else if (novenaDay == '10/10/2022') {
        teresaOfAvila()
        Novena3A.innerHTML = 'Day 4';
    }
    else if (novenaDay == '10/11/2022') {
        teresaOfAvila()
        Novena3A.innerHTML = 'Day 5';
    }
    else if (novenaDay == '10/12/2022') {
        teresaOfAvila()
        Novena3A.innerHTML = 'Day 6';
    }
    else if (novenaDay == '10/13/2022') {
        teresaOfAvila()
        Novena3A.innerHTML = 'Day 7';
    }
    else if (novenaDay == '10/14/2022') {
        teresaOfAvila()
        Novena3A.innerHTML = 'Day 8';
    }
    else if (novenaDay == '10/15/2022') {
        teresaOfAvila()
        Novena3A.innerHTML = 'Day 9';
    }

        //JohnPaulII
    if (novenaDay == '10/6/2022') {
        johnPaulII();
        Novena1A.innerHTML = 'Starts the 14th!';
    }
    else if (novenaDay == '10/7/2022') {
        johnPaulII();
        Novena1A.innerHTML = 'Starts the 14th!';
    }
    else if (novenaDay == '10/8/2022') {
        johnPaulII();
        Novena1A.innerHTML = 'Starts the 14th!';
    }
    else if (novenaDay == '10/9/2022') {
        johnPaulII();
        Novena1A.innerHTML = 'Starts the 14th!';
    }
    else if (novenaDay == '10/10/2022') {
        johnPaulII();
        Novena1A.innerHTML = 'Starts the 14th!';
    }
    else if (novenaDay == '10/11/2022') {
        johnPaulII();
        Novena1A.innerHTML = 'Starts the 14th!';
    }
    else if (novenaDay == '10/12/2022') {
        johnPaulII();
        Novena1A.innerHTML = 'Starts the 14th!';
    }
    else if (novenaDay == '10/13/2022') {
        johnPaulII();
        Novena1A.innerHTML = 'Starts the 14th!';
    }
    else if (novenaDay == '10/14/2022') {
        johnPaulII();
        Novena1A.innerHTML = 'Day 1';
    }
    else if (novenaDay == '10/15/2022') {
        johnPaulII();
        Novena1A.innerHTML = 'Day 2';
    }
    else if (novenaDay == '10/16/2022') {
        johnPaulII();
        Novena1A.innerHTML = 'Day 3';
    }
    else if (novenaDay == '10/17/2022') {
        johnPaulII();
        Novena1A.innerHTML = 'Day 4';
    }
    else if (novenaDay == '10/18/2022') {
        johnPaulII();
        Novena1A.innerHTML = 'Day 5';
    }
    else if (novenaDay == '10/19/2022') {
        johnPaulII();
        Novena1A.innerHTML = 'Day 6';
    }
    else if (novenaDay == '10/20/2022') {
        johnPaulII();
        Novena1A.innerHTML = 'Day 7';
    }
    else if (novenaDay == '10/21/2022') {
        johnPaulII();
        Novena1A.innerHTML = 'Day 8';
    }
    else if (novenaDay == '10/22/2022') {
        johnPaulII();
        Novena1A.innerHTML = 'Day 9';
    }

    //St Jude
    if (novenaDay == '10/8/2022'){
        jude()
        Novena2A.innerHTML = 'Starts the 20th'
    }
    else if (novenaDay == '10/9/2022'){
        jude()
        Novena2A.innerHTML = 'Starts the 20th'
    }
    else if (novenaDay == '10/10/2022'){
        jude()
        Novena2A.innerHTML = 'Starts the 20th'
    }
    else if (novenaDay == '10/11/2022'){
        jude()
        Novena2A.innerHTML = 'Starts the 20th'
    }
    else if (novenaDay == '10/12/2022'){
        jude()
        Novena2A.innerHTML = 'Starts the 20th'
    }
    else if (novenaDay == '10/13/2022'){
        jude()
        Novena2A.innerHTML = 'Starts the 20th';
    }
    else if (novenaDay == '10/14/2022'){
        jude()
        Novena2A.innerHTML = 'Starts the 20th';
    }
    else if (novenaDay == '10/15/2022'){
        jude()
        Novena2A.innerHTML = 'Starts the 20th';
    }
    else if (novenaDay == '10/16/2022'){
        jude()
        Novena2A.innerHTML = 'Starts the 20th';
    }
    else if (novenaDay == '10/17/2022'){
        jude()
        Novena2A.innerHTML = 'Starts the 20th';
    }
    else if (novenaDay == '10/18/2022'){
        jude()
        Novena2A.innerHTML = 'Starts the 20th';
    }
    else if (novenaDay == '10/19/2022'){
        jude()
        Novena2A.innerHTML = 'Starts the 20th';
    }
    else if (novenaDay == '10/20/2022'){
        jude()
        Novena2A.innerHTML = 'Day 1';
    }
    else if (novenaDay == '10/21/2022'){
        jude()
        Novena2A.innerHTML = 'Day 2';
    }
    else if (novenaDay == '10/22/2022'){
        jude()
        Novena2A.innerHTML = 'Day 3';
    }
    else if (novenaDay == '10/23/2022'){
        jude()
        Novena2A.innerHTML = 'Day 4';
    }
    else if (novenaDay == '10/24/2022'){
        jude()
        Novena2A.innerHTML = 'Day 5';
    }
    else if (novenaDay == '10/25/2022'){
        jude()
        Novena2A.innerHTML = 'Day 6';
    }
    else if (novenaDay == '10/26/2022'){
        jude()
        Novena2A.innerHTML = 'Day 7';
    }
    else if (novenaDay == '10/27/2022'){
        jude()
        Novena2A.innerHTML = 'Day 8';
    }
    else if (novenaDay == '10/28/2022'){
        jude()
        Novena2A.innerHTML = 'Day 9';
    }

    //ALL SAINTS
    if (novenaDay == '10/16/2022') {
        allSaints()
        Novena3A.innerHTML = 'Starts the 24th';
    }
    else if (novenaDay == '10/17/2022') {
        allSaints()
        Novena3A.innerHTML = 'Starts the 24th';
    }
    else if (novenaDay == '10/18/2022') {
        allSaints()
        Novena3A.innerHTML = 'Starts the 24th';
    }
    else if (novenaDay == '10/19/2022') {
        allSaints()
        Novena3A.innerHTML = 'Starts the 24th';
    }
    else if (novenaDay == '10/20/2022') {
        allSaints()
        Novena3A.innerHTML = 'Starts the 24th';
    }
    else if (novenaDay == '10/21/2022') {
        allSaints()
        Novena3A.innerHTML = 'Starts the 24th';
    }
    else if (novenaDay == '10/22/2022') {
        allSaints()
        Novena3A.innerHTML = 'Starts the 24th';
    }
    else if (novenaDay == '10/23/2022') {
        allSaints()
        Novena3A.innerHTML = 'Starts the 24th';
    }
    else if (novenaDay == '10/24/2022') {
        allSaints()
        Novena3A.innerHTML = 'Day 1';
    }
    else if (novenaDay == '10/25/2022') {
        allSaints()
        Novena3A.innerHTML = 'Day 2';
    }
    else if (novenaDay == '10/26/2022') {
        allSaints()
        Novena3A.innerHTML = 'Day 3';
    }
    else if (novenaDay == '10/27/2022') {
        allSaints()
        Novena3A.innerHTML = 'Day 4';
    }
    else if (novenaDay == '10/28/2022') {
        allSaints()
        Novena3A.innerHTML = 'Day 5';
    }
    else if (novenaDay == '10/29/2022') {
        allSaints()
        Novena3A.innerHTML = 'Day 6';
    }
    else if (novenaDay == '10/30/2022') {
        allSaints()
        Novena3A.innerHTML = 'Day 7';
    }
    else if (novenaDay == '10/31/2022') {
        allSaints()
        Novena3A.innerHTML = 'Day 8';
    }
    else if (novenaDay == '11/1/2022') {
        allSaints()
        Novena3A.innerHTML = 'Day 9';
    }



    //Martin Tours
    if (novenaDay == '10/23/2022') {
        martinTours();
        Novena1A.innerHTML = 'Starts the 3rd!';
    }
    if (novenaDay == '10/24/2022') {
        martinTours();
        Novena1A.innerHTML = 'Starts the 3rd!';
    }
    if (novenaDay == '10/25/2022') {
        martinTours();
        Novena1A.innerHTML = 'Starts the 3rd!';
    }
    if (novenaDay == '10/26/2022') {
        martinTours();
        Novena1A.innerHTML = 'Starts the 3rd!';
    }
    if (novenaDay == '10/27/2022') {
        martinTours();
        Novena1A.innerHTML = 'Starts the 3rd!';
    }
    if (novenaDay == '10/28/2022') {
        martinTours();
        Novena1A.innerHTML = 'Starts the 3rd!';
    }
    if (novenaDay == '10/29/2022') {
        martinTours();
        Novena1A.innerHTML = 'Starts the 3rd!';
    }
    if (novenaDay == '10/30/2022') {
        martinTours();
        Novena1A.innerHTML = 'Starts the 3rd!';
    }
    if (novenaDay == '10/31/2022') {
        martinTours();
        Novena1A.innerHTML = 'Starts the 3rd!';
    }
    if (novenaDay == '11/01/2022') {
        martinTours();
        Novena1A.innerHTML = 'Starts the 3rd!';
    }
    if (novenaDay == '11/02/2022') {
        martinTours();
        Novena1A.innerHTML = 'Starts the 3rd!';
    }
    if (novenaDay == '11/03/2022') {
        martinTours();
        Novena1A.innerHTML = 'Day 1';
    }
    else if (novenaDay == '11/04/2022') {
        martinTours();
        Novena1A.innerHTML = 'Day 2';
    }
    else if (novenaDay == '11/05/2022') {
        martinTours();
        Novena1A.innerHTML = 'Day 3';
    }
    else if (novenaDay == '11/06/2022') {
        martinTours();
        Novena1A.innerHTML = 'Day 4';
    }
    else if (novenaDay == '11/07/2022') {
        martinTours();
        Novena1A.innerHTML = 'Day 5';
    }
    else if (novenaDay == '11/08/2022') {
        martinTours();
        Novena1A.innerHTML = 'Day 6';
    }
    else if (novenaDay == '11/09/2022') {
        martinTours();
        Novena1A.innerHTML = 'Day 7';
    }
    else if (novenaDay == '11/10/2022') {
        martinTours();
        Novena1A.innerHTML = 'Day 8';
    }
    else if (novenaDay == '11/11/2022') {
        martinTours();
        Novena1A.innerHTML = 'Day 9';
    }


    //frances Xaiver
    if (novenaDay == '10/29/2022'){
        francesXaiver()
        Novena2A.innerHTML = 'Starts the 5th!'
    }
    else if (novenaDay == '10/30/2022'){
        francesXaiver()
        Novena2A.innerHTML = 'Starts the 5th!'
    }
    else if (novenaDay == '10/31/2022'){
        francesXaiver()
        Novena2A.innerHTML = 'Starts the 5th!'
    }
    else if (novenaDay == '11/01/2022'){
        francesXaiver()
        Novena2A.innerHTML = 'Starts the 5th!'
    }
    else if (novenaDay == '11/02/2022'){
        francesXaiver()
        Novena2A.innerHTML = 'Starts the 5th!'
    }
    else if (novenaDay == '11/03/2022'){
        francesXaiver()
        Novena2A.innerHTML = 'Starts the 5th!';
    }
    else if (novenaDay == '11/04/2022'){
        francesXaiver()
        Novena2A.innerHTML = 'Starts the 5th!';
    }
    else if (novenaDay == '11/05/2022'){
        francesXaiver()
        Novena2A.innerHTML = 'Day 1';
    }
    else if (novenaDay == '11/06/2022'){
        francesXaiver()
        Novena2A.innerHTML = 'Day 2';
    }
    else if (novenaDay == '11/07/2022'){
        francesXaiver()
        Novena2A.innerHTML = 'Day 3';
    }
    else if (novenaDay == '11/08/2022'){
        francesXaiver()
        Novena2A.innerHTML = 'Day 4';
    }
    else if (novenaDay == '11/09/2022'){
        francesXaiver()
        Novena2A.innerHTML = 'Day 5';
    }
    else if (novenaDay == '11/10/2022'){
        francesXaiver()
        Novena2A.innerHTML = 'Day 6';
    }
    else if (novenaDay == '11/11/2022'){
        francesXaiver()
        Novena2A.innerHTML = 'Day 7';
    }
    else if (novenaDay == '11/12/2022'){
        francesXaiver()
        Novena2A.innerHTML = 'Day 8';
    }
    else if (novenaDay == '11/13/2022'){
        francesXaiver()
        Novena2A.innerHTML = 'Day 9';
    }



    //St. Gertrude
    if (novenaDay == '11/02/2022') {
        gertrude()
        Novena3A.innerHTML = 'Starts the 8th!';
    }
    else if (novenaDay == '11/03/2022') {
        gertrude()
        Novena3A.innerHTML = 'Starts the 8th!';
    }
    else if (novenaDay == '11/04/2022') {
        gertrude()
        Novena3A.innerHTML = 'Starts the 8th!';
    }
    else if (novenaDay == '11/05/2022') {
        gertrude()
        Novena3A.innerHTML = 'Starts the 8th!';
    }
    else if (novenaDay == '11/06/2022') {
        gertrude()
        Novena3A.innerHTML = 'Starts the 8th!';
    }
    else if (novenaDay == '11/07/2022') {
        gertrude()
        Novena3A.innerHTML = 'Starts the 8th!';
    }
    else if (novenaDay == '11/08/2022') {
        gertrude()
        Novena3A.innerHTML = 'Day 1';
    }
    else if (novenaDay == '11/09/2022') {
        gertrude()
        Novena3A.innerHTML = 'Day 2';
    }
    else if (novenaDay == '11/10/2022') {
        gertrude()
        Novena3A.innerHTML = 'Day 3';
    }
    else if (novenaDay == '11/11/2022') {
        gertrude()
        Novena3A.innerHTML = 'Day 4';
    }
    else if (novenaDay == '11/12/2022') {
        gertrude()
        Novena3A.innerHTML = 'Day 5';
    }
    else if (novenaDay == '11/13/2022') {
        gertrude()
        Novena3A.innerHTML = 'Day 6';
    }
    else if (novenaDay == '11/14/2022') {
        gertrude()
        Novena3A.innerHTML = 'Day 7';
    }
    else if (novenaDay == '11/15/2022') {
        gertrude()
        Novena3A.innerHTML = 'Day 8';
    }
    else if (novenaDay == '11/16/2022') {
        gertrude()
        Novena3A.innerHTML = 'Day 9';
    }


}

