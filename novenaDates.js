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
        Novena2subA.innerHTML = 'O glorious prince Saint Michael, chief and commander of the heavenly hosts, guardian of souls, vanquisher of rebel spirits, servant in the house of the Divine King and our admirable conductor, you who shine with excellence and superhuman virtue deliver us from all evil, who turn to you with confidence and enable us by your gracious protection to serve God more and more faithfully every day. Pray for us, O glorious Saint Michael, Prince of the Church of Jesus Christ, that we may be made worthy of His promises. <br> (Mention your request here…) <br> Almighty and Everlasting God, Who, by a prodigy of goodness and a merciful desire for the salvation of all men, has appointed the most glorious Archangel Saint Michael Prince of Your Church, make us worthy, we ask You, to be delivered from all our enemies, that none of them may harass us at the hour of death, but that we may be conducted by him into Your Presence. This we ask through the merits of Jesus Christ Our Lord. Amen. Saint Michael the Archangel, defend us in battle, be our protection against the wickedness and snares of the devil. May God rebuke him we humbly pray; and do thou, O Prince of the Heavenly host, by the power of God, cast into Hell Satan and all evil spirits who prowl about the world seeking the ruin of souls. Amen. Say 1: Our Father… Say 1: Hail Mary… Say 1: Glory Be…'
        novena2Pic.src = './novenaImages/St. Michael Archangel.jpg';
    }

    function therese(){
        Novena3.innerHTML = 'St. Therese <br> September 23 - October 1'
        Novena3A.innerHTML = 'Starts the 23rd!'
        Novena3sub.innerHTML = 'Feast Day <br> October 1'
        Novena3subA.innerHTML = 'O Little Therese of the Child Jesus, please pick for me a rose from the heavenly gardens and send it to me as a message of love. O Little Flower of Jesus, ask God to grant the favors I now place with confidence in your hands <br> (Mention your request here…) <br> St. Therese, help me to always believe as you did in God’s great love for me, so that I might imitate your “Little Way” each day. Amen <br> Say 1: Our Father… Say 1: Hail Mary…Say 1: Glory Be…'
        novena3Pic.src = './novenaImages/Therese.jpg';
    }

    function faustina(){
        Novena1.innerHTML = 'St. Faustina <br> September 27 - October 5'
        Novena1A.innerHTML = 'Starts the 27th!'
        Novena1sub.innerHTML = 'Feast Day <br> October 5'
        Novena1subA.innerHTML = 'O Jesus, who filled Saint Faustina with profound veneration for Your boundless Mercy, deign, if it be Your holy will, to grant me, through her intercession, the grace for which I fervently pray… <br> (Mention your request here…) <br> My sins render me unworthy of Your Mercy, but be mindful of Saint Faustina spirit of sacrifice and self-denial, and reward her virtue by granting the petition which, with childlike trust, I present to You through her intercession. Saint Faustina, pray for us. <br> Say 1: Our Father…  Say 1: Hail Mary… Say 1: Glory Be…'
        novena1Pic.src = './novenaImages/Fpic3.jpg';
    }

    function LadyOfRosary(){
        Novena2.innerHTML = 'Our Lady Of The Rosary <br> September 29 - October 7'
        Novena2A.innerHTML = 'Starts the 29th!'
        Novena2sub.innerHTML = 'Feast Day <br> October 7'
        Novena2subA.innerHTML = 'Amen. Queen of the Most Holy Rosary, in these times of such brazen impiety, show your power with the signs of your former victories. Look with mercy on the Church of your Son, on His Vicar on earth, and on all the clergy and laity, who are sorely oppressed in this mighty conflict. Powerful vanquisher of all heresies, hasten the hour of mercy even though the hour of God’s justice is every day provoked by the countless sins of men. As I kneel before you in prayer, obtain for me my requests <br> (Mention your request here…) <br> Queen of the Most Holy Rosary, pray for us. <br> Say 1: Our Father…  Say 1: Hail Mary… Say 1: Glory Be…'
        novena2Pic.src = './novenaImages/LadyOfRosary.jpg';
    }

    function teresaOfAvila(){
        Novena3.innerHTML = 'St. Teresa Of Avila <br> October 7 - 15'
        Novena3A.innerHTML = 'Starts the 7th!'
        Novena3sub.innerHTML = 'Feast Day <br> October 15'
        Novena3subA.innerHTML = 'O Saint Teresa, seraphic Virgin, beloved spouse of thy crucified Lord, thou who on earth didst burn with a love so intense toward thy God and my God, and now dost glow with a brighter and purer flame in paradise: obtain for me also, I beseech thee, a spark of that same holy fire which shall cause me to forget the world, all things created, and even myself; for thou didst ever avidly desire to see Him loved by all men.  Grant that my every thought and desire and affection may be continually directed to doing the will of God, the supreme Good, whether I am in joy or in pain, for He is worthy to be loved and obeyed forever. Obtain for me this grace, thou who art so powerful with God; may I be all on fire, like thee, with the holy love of God. Amen. <br> (Mention your request here…) <br> Let nothing disturb you, Let nothing frighten you, All things are passing away: God never changes. Patience obtains all things Whoever has God lacks nothing; God alone suffices. <br> Say 1: Our Father…  Say 1: Hail Mary… Say 1: Glory Be…'
        novena3Pic.src = './novenaImages/St. Teresa Of Avila.jpg';
    }

    function johnPaulII(){
        Novena1.innerHTML = 'St. John Paul II <br> October 14 - 22'
        Novena1A.innerHTML = 'Starts the 14th!'
        Novena1sub.innerHTML = 'Feast Day <br> October 22'
        Novena1subA.innerHTML = 'Saint John Paul II, you taught the world through word and example that Jesus is the face of the Father’s merciful love. You called upon the world to “be not afraid” and “open wide the doors for Christ.” Now, through your powerful intercession, show us that the love of God is living and active, stronger than all the forces of the world, the flesh, and the devil.  Through your prayers, help us in every need and deliver us from every evil. May we always know by experience the love of God the Father, mediated through Jesus Christ by the power of the Holy Spirit. “God, merciful Father, in your Son, Jesus Christ, you have revealed your love and poured it out upon us in the Holy Spirit, the Comforter. We entrust to you today the destiny of the world and of every man and woman. Bend down to us sinners, heal our weakness, conquer all evil, and grant that all the peoples of the earth may experience your mercy.  In You, the Triune God, may they ever find the source of hope. Eternal Father, by the Passion and Resurrection of your Son, have mercy on us and upon the whole world!” <br> (Mention your request here…) <br> Amen <br> Say 1: Our Father…  Say 1: Hail Mary… Say 1: Glory Be…'
        novena1Pic.src = './novenaImages/JohnPaulII.jpg';
    }

    function jude(){
        Novena2.innerHTML = 'St. Jude <br> October 19 - 28'
        Novena2A.innerHTML = 'Starts the 19th!'
        Novena2sub.innerHTML = 'Feast Day <br> October 28'
        Novena2subA.innerHTML = 'Most holy Apostle, St. Jude, faithful servant and friend of Jesus, the Church honors and invokes you universally, as the patron of difficult cases, of things almost despaired of, Pray for me, I am so helpless and alone. Intercede with God for me that He bring visible and speedy help where help is almost despaired of. Come to my assistance in this great need that I may receive the consolation and help of heaven in all my necessities, tribulations, and sufferings, particularly <br> (Mention your request here…) <br> And that I may praise God with you and all the saints forever. I promise, O Blessed St. Jude, to be ever mindful of this great favor granted me by God and to always honor you as my special and powerful patron, and to gratefully encourage devotion to you. Amen <br> Say 1: Our Father… Say 1: Hail Mary… Say 1: Glory Be…'
        novena2Pic.src = './novenaImages/St-Jude.jpg';
    }

    function allSaints(){
        Novena3.innerHTML = 'All Saints <br> October 24 - November 1'
        Novena3A.innerHTML = 'Starts the 24th!'
        Novena3sub.innerHTML = 'Feast Day <br> November 1'
        Novena3subA.innerHTML = 'O holy Mary, Mother of God and Mother of the Church, be my mother and guide me to a life of holiness that I may one day join you and your Son in Heaven for all eternity. Intercede on my behalf that I may be a student of your humility and purity. I ask that you place before your Son my petitions. <br> (State your intentions here) <br> Mary, conceived without sin, pray for us. Mary, Most Holy, pray for us. Mary, Most Pure, pray for us. Mary, Star of the Sea, pray for us. Mary, Queen of Heaven and Earth, pray for us. Mary, Queen of Angels and Saints, pray for us. Amen. In the name of the Father, and of the Son, and of the Holy Spirit. Amen.'
        novena3Pic.src = './novenaImages/AllSaints.jpg';
    }

    function martinTours(){
        Novena1.innerHTML = 'St. Martin De Tours <br> November 2 - November 11'
        Novena1A.innerHTML = 'Starts the 2nd!'
        Novena1sub.innerHTML = 'Feast Day <br> November 11'
        Novena1subA.innerHTML = 'Blessed Saint Martín of Tours, full of the Spirit of the Lord always having inexhaustible charity for the needy. You, who full of love and generosity when you saw the beggar that was freezing from cold, without knowing that in truth he was Christ, did not doubt to give him half of your cape, and did not give it completely to him since the other half belonged to the Roman army; you, who did not seek recognition but only to favor your neighbor, found glory before the Lord. And when the Savior appeared to you dressed with the half-cape so as to express appreciation for your gesture and He told you “today you covered me with your mantle”, you decided to no longer serve the army and to dedicate your life to God and to the salvation of souls, being from then on a propagator of the faith and a holy man totally dedicated to whomever was in need. Glorious Saint Martin, you who worked miracles and prodigies, who with joy, amiability and the most exquisite goodness won over the hearts of all and did not cease to ever work for their well being: give me your hand and help me to come out of all lack and scarcity which today afflicts me and weighs me down. Glorious Saint Martin, my blessed patron, I humbly ask you with great faith that you attain from God, the fount of all Mercies that my ways on this earth, my work and my toils be cleansed and opened with clarity. In the name of Omnipotent God, Saint Martin of Tours, remove all that harms me and give me work and prosperity. O blessed relief, give me your saintly protection, assist me, I beg you, in these difficult times: <br> (Mention your request here…) <br> Say 1: Our Father… Say 1: Hail Mary…Say 1: Glory Be…'
        novena1Pic.src = './novenaImages/stmartinTours.jpg';
    }


    function francesXaiver(){
        Novena2.innerHTML = 'St. Frances Xavier Cabrini <br> November 5 - November 13'
        Novena2A.innerHTML = 'Starts the 5th!'
        Novena2sub.innerHTML = 'Feast Day <br> November 13'
        Novena2subA.innerHTML = 'Fortify me with the grace of Your Holy Spirit and give Your peace to my soul that I may be free from all needless anxiety, solicitude and worry. Help me to desire always that which is pleasing and acceptable to You so that Your will may be my will. Amen <br> (Mention your request here…) St. Frances Cabrini, pray for us <br> Say 1: Our Father… Say 1: Hail Mary…Say 1: Glory Be…'
        novena2Pic.src = './novenaImages/stFrancesCabrini.jpg';
    }


    function gertrude(){
        Novena3.innerHTML = 'St. Gertrude <br> November 8 - November 16'
        Novena3A.innerHTML = 'Starts the 8th!'
        Novena3sub.innerHTML = 'Feast Day <br> November 16'
        Novena3subA.innerHTML = 'O Lord Jesus, by the love Thou didst bear to the virginal heart of Saint Gertrude and by which Thou hast promised that no sinner who would honor and love her should die a sudden and unprovided death, grant me, I beseech Thee, this grace, and let me so love Thee and repent of my sins that with faith and confidence I may expect a happy death. Amen <br> (Mention your request here…) <br> Prayer that was prayed by St. Gertrude for all the souls in Purgatory: “Eternal Father, I offer Thee the Most Precious Blood of Thy Divine Son, Jesus, in union with the Masses said throughout the world today, for all the holy Souls in Purgatory. Amen. Our Lord told St. Gertrude the Great that this prayer would release 1,000 Souls from Purgatory each time it is said. St. Gertrude The Great, pray for us. <br> Say 1: Our Father…  Say 1: Hail Mary… Say 1: Glory Be…'
        novena3Pic.src = './novenaImages/stGertrude.jpg';
    }

    function cecilia(){
        Novena1.innerHTML = 'St. Martin De Tours <br> November 14 - November 22'
        Novena1A.innerHTML = 'Starts the 14th!'
        Novena1sub.innerHTML = 'Feast Day <br> November 22'
        Novena1subA.innerHTML = 'Lord, have mercy on us. Christ, have mercy on us. Lord, have mercy on us. Christ hear us. Christ, graciously hear us. God the Father of heaven, Have mercy on us. God the Son, Redeemer of the world, Have mercy on us. God the Holy Spirit, Have mercy on us. Holy Trinity, one God, Have mercy on us. Holy Mary, Mother of God, Pray for us. (repeat after each line) St. Cecilia, St. Cecilia, wise virgin, St. Cecilia, whose heart burned with the fire of divine love, St. Cecilia, apostle by your zeal and charity, St. Cecilia, who converted your spouse and procured for him the crown of martyrdom, St. Cecilia, who by your pleadings moved the hearts of pagans, and brought them into the true Church, St. Cecilia, who did unceasingly see your guardian angel by your side, St. Cecilia, who mingled your voice with the celestial harmonies of the virgins, St. Cecilia, who by your melodious accents celebrated the praises of Jesus, St. Cecilia, illustrious martyr of Jesus Christ, St. Cecilia, who during three days suffered most excruciating torments, St. Cecilia, consolation of the afflicted, St. Cecilia, protectress of all who invoke you, St. Cecilia, patroness of holy canticles, St. Cecilia, special patroness and advocate of all singers, musicians, authors, and students, We salute you, O Virgin, who gave your blood for the defense and faith of Jesus Christ. <br> (Mention your request here…) <br> Say 1: Our Father… Say 1: Hail Mary…Say 1: Glory Be…'
        novena1Pic.src = './novenaImages/stCecilia.jpg';
    }

    function miraculousMedal(){
        Novena2.innerHTML = 'Miraculous Medal <br> November 20 - November 29'
        Novena2A.innerHTML = 'Starts the 20th!'
        Novena2sub.innerHTML = 'Feast Day <br> November 29'
        Novena2subA.innerHTML = 'O Immaculate Virgin Mary, Mother of Our Lord Jesus and our Mother, penetrated with the most lively confidence in your all-powerful and never-failing intercession, manifested so often through the Miraculous Medal, we your loving and trustful children implore you to obtain for us the graces and favors we ask during this novena, if they be beneficial to our immortal souls and the souls for whom we pray. <br> (Mention your request here…) <br> You know, O Mary, how often our souls have been the sanctuaries of your Son who hates iniquity. Obtain for us then a deep hatred of sin and that purity of heart which will attach us to God alone so that our every thought, word and deed may tend to His greater glory. Obtain for us also a spirit of prayer and self-denial that we may recover by penance what we have lost by sin and at length attain to that blessed abode where you are the Queen of angels and of men. Amen. O Mary, conceived without sin, pray for us. who have recourse to Thee, and for those who do not have recourse to Thee, especially the enemies of the Church and those recommended Thee, Amen. <br> Say 1: Our Father… Say 1: Hail Mary… Say 1: Glory Be…'
        novena2Pic.src= './novenaImages/miraculousMedal.jpg';
    }

    function barbara(){
        Novena3.innerHTML = 'St. Barbara <br> November 26 - December 4'
        Novena3A.innerHTML = 'Starts the 26th!'
        Novena3sub.innerHTML = 'Feast Day <br> December 4'
        Novena3subA.innerHTML = 'O GOD, Who didst adorn Thy holy Virgin and Martyr Barbara with extraordinary fortitude in the confession of the Faith, and didst console her in the most atrocious torments; grant us through her intercession perseverance in the fulfillment of Thy law and the grace of being fortified before our end with the holy Sacraments, and of a happy death. Through Christ our Lord.  St. Barbara, at my last end Obtain for me the Sacrament; Assist one in that direst need  When I my God and Judge must meet: That robed in sanctifying grace  My soul may stand before His face. Amen. <br> (Mention your request here…) <br> Say 1: Our Father…  Say 1: Hail Mary… Say 1: Glory Be…'
        novena3Pic.src = './novenaImages/st.barbara.jpg';
    }

    function immaculateConception(){
        Novena1.innerHTML = 'Immaculate Conception <br> November 30 - December 8'
        Novena1A.innerHTML = 'Starts the 30th!'
        Novena1sub.innerHTML = 'Feast Day <br> December 8'
        Novena1subA.innerHTML = 'O most Holy Virgin, who was pleasing to the Lord and became His mother, immaculate in body and spirit, in faith and in love, look kindly on me as I implore your powerful intercession. O most Holy Mother, who by your blessed Immaculate Conception, from the first moment of your conception did crush the head of the enemy, receive our prayers as we implore you to present at the throne of God the favor we now request… <br> (Mention your request here…) <br> O Mary of the Immaculate Conception, Mother of Christ, you had influence with your Divine Son while upon this earth; you have the same influence now in heaven. Pray for us and obtain for us from him the granting of my petition if it be the Divine Will. Amen <br> Say 1: Our Father…Say 1: Hail Mary…Say 1: Glory Be… '
        novena1Pic.src = './novenaImages/immaculateConception.jpg';
    }

    function guadalupe(){
        Novena2.innerHTML = 'Lady Of Guadalupe <br> December 4 - December 12'
        Novena2A.innerHTML = 'Starts the 4th!'
        Novena2sub.innerHTML = 'Feast Day <br> December 12'
        Novena2subA.innerHTML = 'Our Lady of Guadalupe, Mystical Rose, make intercession for the Holy Church, protect the Sovereign Pontiff, help all those who invoke thee in their necessities, and since thou art the ever Virgin Mary, and Mother of the True God, obtain for us from thy most holy Son the grace of keeping our faith, of sweet hope in the midst of the bitterness of life, of burning charity, and the precious gift of final perseverance. "Am I not here? I who am your mother?" <br> (Mention your request here…) <br> Say 1: Our Father…  Say 1: Hail Mary… Say 1: Glory Be…'
        novena2Pic.src= './novenaImages/ladyOfGuadalupe.jpg';
    }
    
    function johnOfCross(){
        Novena3.innerHTML = 'St. Barbara <br> December 6 - December 14'
        Novena3A.innerHTML = 'Starts the 6th!'
        Novena3sub.innerHTML = 'Feast Day <br> December 14'
        Novena3subA.innerHTML = 'Almighty Father, you endowed John of the Cross with a spirit of self-denial and a love of the Cross. By following his example, may we come to the eternal vision of your glory. We ask this through our Lord Jesus Christ, Your Son, who lives and reigns with You and the Holy Spirit, one God, for ever and ever. Amen <br> (Mention your request here…) St. John of the Cross, pray for us. <br> Say 1: Our Father…  Say 1: Hail Mary… Say 1: Glory Be…'
        novena3Pic.src = './novenaImages/st.JohnOfCross.jpg';
    }

    function ignatiusOfAntioch(){
        Novena1.innerHTML = 'Ignatius Of Antioch <br> December 12 - December 20'
        Novena1A.innerHTML = 'Starts the 12th!'
        Novena1sub.innerHTML = 'Feast Day <br> December 20'
        Novena1subA.innerHTML = '"I am the wheat of God, and am ground by the teeth of the wild beasts, that I may be found the pure bread of God. I long after the Lord, the Son of the true God and Father, Jesus Christ. Him I seek, who died for us and rose again. I am eager to die for the sake of Christ. My love has been crucified, and there is no fire in me that loves anything. But there is living water springing up in me, and it says to me inwardly: Come to the Father.” Amen <br> (Mention your request here…) <br> Say 1: Our Father…   Say 1: Hail Mary…  Say 1: Glory Be…'
        novena1Pic.src = './novenaImages/ignatiusOfAntioch.png';
    }

    function christmas(){
        Novena2.innerHTML = 'Christmas Novena <br> December 17 - December 25'
        Novena2A.innerHTML = 'Starts the 17th!'
        Novena2sub.innerHTML = 'Feast Day <br> December 25'
        Novena2subA.innerHTML = 'HAIL, and blessed be the hour and moment At which the Son of God was born Of a most pure Virgin At a stable at midnight in Bethlehem In the piercing cold At that hour vouchsafe, I beseech Thee, To hear my prayers and grant my desires  <br> (Mention your request here…) <br> Through Jesus Christ and His most Blessed Mother. (Say 15 times each day) <br> Say 1: Our Father… Say 1: Hail Mary… Say 1: Glory Be…'
        //novena2Pic.src= './novenaImages/ladyOfGuadalupe.jpg';
    }

    function johnApostle(){
        Novena3.innerHTML = 'St. John The Apostle <br> December 19 - December 27'
        Novena3A.innerHTML = 'Starts the 19th!'
        Novena3sub.innerHTML = 'Feast Day <br> December 27'
        Novena3subA.innerHTML = 'O glorious Apostle, who, on account of thy virginal purity, wast so beloved by Jesus as to deserve to lay thy head upon His divine breast, and to be left, in His place, as son to His most holy Mother: I beg thee to inflame me with a most ardent love toward Jesus and Mary. Obtain for me from our Lord that I, too, with a heart purified from earthly afflictions, may be made worthy to be ever united to Jesus as a faithful disciple, and to Mary as a devoted son, both here on earth and eternally in heaven. <br> (Mention your request here…) <br> Say 1: Our Father…  Say 1: Hail Mary… Say 1: Glory Be…'
        //novena3Pic.src = './novenaImages/st.JohnOfCross.jpg';
    }

    function holyNameJesus(){
        Novena1.innerHTML = 'Holy Name Of Jesus <br> December 26 - January 3'
        Novena1A.innerHTML = 'Starts the 26th!'
        Novena1sub.innerHTML = 'Feast Day <br> January 3'
        Novena1subA.innerHTML = 'O GOOD JESUS, according to Thy great mercy, have mercy on me. O most merciful Jesus, by that Precious Blood which Thou didst will to shed for sinners, I beseech Thee to wash away all mine iniquities and to look graciously upon me, a poor and unworthy sinner, as I call upon Thy Holy Name. Therefore, O Jesus, do Thou save me for Thy Holy Name’s sake. O God, Who didst appoint Thine only-begotten Son to be the Savior of mankind and didst command His Name to be called Jesus; mercifully grant that we may enjoy the vision of Him in Heaven, Whose Holy Name we venerate on earth. Through the same Christ Our Lord. Amen <br> (Mention your request here… Blessed be the Most Holy Name of Jesus without end! <br> Say 1: Our Father…  Say 1: Hail Mary… Say 1: Glory Be…'
        //novena1Pic.src = './novenaImages/ignatiusOfAntioch.png';
    }

    function elizabethAnn(){
        Novena2.innerHTML = 'St. Elizabeth Ann <br> December 27 - January 4'
        Novena2A.innerHTML = 'Starts the 27th!'
        Novena2sub.innerHTML = 'Feast Day <br> January 4'
        Novena2subA.innerHTML = 'Lord God, you blessed Elizabeth Seton with gifts of grace as wife and mother, educator and foundress, so that she might spend her life in service to your people. Through her example and prayers may we learn to express our love for you in love for our fellow men and women. We ask this through Christ our Lord Jesus Christ, your Son, who lives and reigns with you and the Holy Spirit, one God, for ever and ever. Amen <br> (Mention your request here…)Saint Elizabeth Ann Seton, pray for us. <br> Say 1: Our Father…  Say 1: Hail Mary… Say 1: Glory Be…'
        //novena2Pic.src= './novenaImages/ladyOfGuadalupe.jpg';
    }
 
    function johnNeumann(){
        Novena3.innerHTML = 'St. John Neumann <br> December 28 - January 5'
        Novena3A.innerHTML = 'Starts the 28th!'
        Novena3sub.innerHTML = 'Feast Day <br> January 5'
        Novena3subA.innerHTML = 'Dear Lord, make me selfless as St. John Neumann was. Throughout my life, give me the grace to direct my first thoughts to the service of You and of others. Make my prayer “Your will be done,” knowing that in Your mercy and love, Your will for me is my sanctification. Merciful Father, You have given me all that I have in this world, even life itself. In all my daily needs, help me to remember the needs of others too. Make me aware of the need to pray to You, not just for myself but also for the Church, the pope, the clergy, and all people who suffer any need. I ask this through Jesus Christ, Our Lord. Amen. <br> (Mention your request here…) St. John Neumann, pray for us <br> Say 1: Our Father…  Say 1: Hail Mary… Say 1: Glory Be…'
        //novena3Pic.src = './novenaImages/st.JohnOfCross.jpg';
    }

    function sebastion(){
        Novena1.innerHTML = 'St. Sebastion <br> January 12 - January 20'
        Novena1A.innerHTML = 'Starts the 12th!'
        Novena1sub.innerHTML = 'Feast Day <br> January 20'
        Novena1subA.innerHTML = 'Glorious Sebastian, martyr and saint, I call on your strength and courage to help me through this difficult trial. Your faith was so deep, a multitude of arrows could not finish you. The piercing wounds inflicted for your faith only proved to strengthen your belief. May you intercede for those who are weakened from the effects of disease. I ask for your intercession that I may also survive that which threatens to destroy my beliefs in the mercy of Christ. Amen. <br> (Mention your request here…) St. Sebastian, pray for us.  <br> Say 1: Our Father…    Say 1: Hail Mary…  Say 1: Glory Be…'
        //novena1Pic.src = './novenaImages/ignatiusOfAntioch.png';
    }

    function agnes(){
        Novena2.innerHTML = 'St. Agnes <br> January 13 - January 21'
        Novena2A.innerHTML = 'Starts the 13th!'
        Novena2sub.innerHTML = 'Feast Day <br> January 21'
        Novena2subA.innerHTML = 'O glorious St. Agnes, You served God in humility and confidence on earth and are now in the enjoyment of His beatific Vision in heaven because you persevered till death and gained the crown of eternal life. Remember now the dangers that surround me in the vale of tears, and intercede for me in my needs and troubles. Amen. <br> (Mention your request here…) Saint Agnes, pray for us. <br> Say 1: Our Father…  Say 1: Hail Mary… Say 1: Glory Be…'
        //novena2Pic.src= './novenaImages/ladyOfGuadalupe.jpg';
    }

    function francisDeSales(){
        Novena3.innerHTML = 'St. Francis De Sales <br> January 15 - January 24'
        Novena3A.innerHTML = 'Starts the 15th!'
        Novena3sub.innerHTML = 'Feast Day <br> January 24'
        Novena3subA.innerHTML = 'Do not look forward in fear to the changes in life; rather, look to them with full hope that as they arise, God, whose very own you are, will lead you safely through all things; and when you cannot stand it, God will carry you in His arms. Do not fear what may happen tomorrow, the same understanding Father who cares for you today will take care of you then and every day. He will either shield you from suffering or will give you unfailing strength to bear it. Be at peace, and put aside all anxious thoughts and imaginations. <br> (Mention your request here…)  <br> Say 1: Our Father…  Say 1: Hail Mary… Say 1: Glory Be…'
        //novena3Pic.src = './novenaImages/st.JohnOfCross.jpg';
    }

    function johnBosco(){
        Novena1.innerHTML = 'St. John Bosco <br> January 23 - January 31'
        Novena1A.innerHTML = 'Starts the 23rd!'
        Novena1sub.innerHTML = 'Feast Day <br> January 31'
        Novena1subA.innerHTML = 'O glorious Saint John Bosco, who in order to lead young people to the feet of the divine Master and to mold them in the light of faith and Christian morality didst heroically sacrifice thyself to the very end of thy life and didst set up a proper religious Institute destined to endure and to bring to the farthest boundaries of the earth thy glorious work, obtain also for us from Our Lord a holy love for young people who are exposed to so many seductions in order that we may generously spend ourselves in supporting them against the snares of the devil, in keeping them safe from the dangers of the world, and in guiding them, pure and holy, in the path that leads to God. <br> (Mention your request here…) Amen <br> Say 1: Our Father…   Say 1: Hail Mary…  Say 1: Glory Be…'
        //novena1Pic.src = './novenaImages/ignatiusOfAntioch.png';
    }

    function ourLadyOfGoodSuccess(){
        Novena2.innerHTML = 'Our Lady Of Good Success <br> January 25 - February 2'
        Novena2A.innerHTML = 'Starts the 25th!'
        Novena2sub.innerHTML = 'Feast Day <br> February 2'
        Novena2subA.innerHTML = 'I believe in Thee, O my God. Strengthen, O Lord, my faith. I hope in Thee, O my God. Affirm, O Lord, my hope. I love Thee, O my God; increase, O Lord, my love. I repent of having offended Thee. O my God, help me to have contrition, so that with the help of Thy grace and the powerful patronage of Holy Mary of Good Success, I may never sin again. O Lord, have pity and mercy on me. Amen. <br> (Mention your request here…) <br> Say 1: Our Father…  Say 1: Hail Mary… Say 1: Glory Be…  <br> Hail Holy Queen, Mother of Mercy, our life, our sweetness, and our hope. To Thee do we cry, poor banished children of Eve. To Thee do we send up our sighs, mourning and weeping in this valley of tears. Turn, then, most gracious advocate, thine eyes of mercy toward us. And after this, our exile, show unto us the blessed fruit of Thy womb, Jesus. O clement, O loving, O sweet Virgin Mary, Pray for us, O Holy Mother of God: That we may be made worthy of the promises of Christ. Amen'
        //novena2Pic.src= './novenaImages/ladyOfGuadalupe.jpg';
    }


    function bakhita(){
        Novena3.innerHTML = 'St. Bakhita <br> January 31 - February 8'
        Novena3A.innerHTML = 'Starts the 31st!'
        Novena3sub.innerHTML = 'Feast Day <br> January 31'
        Novena3subA.innerHTML = 'Loving God, rewarder of the humble, you blessed St. Josephine Bakhita with charity and patience. May her prayers help us, and her example inspire us to carry our cross and to love you always.  Pour upon us the spirit of wisdom and love with which you filled St. Josephine Bakhita. <br> (Mention your request here…) By serving you as she did, may we please you by our faith and our actions. Grant this through our Lord Jesus Christ, your Son, who lives and reigns with you and the Holy Spirit, one God, for ever and ever. Amen <br> Say 1: Our Father…  Say 1: Hail Mary… Say 1: Glory Be…'
        //novena3Pic.src = './novenaImages/st.JohnOfCross.jpg';
    }

    function scholastica(){
        Novena1.innerHTML = 'St. Scholastica <br> February 2 - February 10'
        Novena1A.innerHTML = 'Starts the 2nd!'
        Novena1sub.innerHTML = 'Feast Day <br> February 10'
        Novena1subA.innerHTML = 'O God, to show us where innocence leads, you made the soul of your virgin Saint Scholastica soar to heaven like a dove in flight. Grant through her merits and her prayers that we may so live in innocence as to attain to joys everlasting. This we ask through our Lord Jesus Christ, Your Son, Who lives and reigns with You and the Holy Spirit, One God, forever and ever. Amen <br> (Mention your request here…) St. Scholastica, pray for us.  <br> Say 1: Our Father…  Say 1: Hail Mary… Say 1: Glory Be…'
        //novena1Pic.src = './novenaImages/ignatiusOfAntioch.png';
    }

    function ourLadyLourd(){
        Novena2.innerHTML = 'Our Lady Of Lourdes <br> February 3 - February 11'
        Novena2A.innerHTML = 'Starts the 3rd!'
        Novena2sub.innerHTML = 'Feast Day <br> February 11'
        Novena2subA.innerHTML = 'O Mary Immaculate, Our Lady of Lourdes, virgin and mother, queen of heaven, chosen from all eternity to be the Mother of the Eternal Word and in virtue of this title preserved from original sin, we kneel before you as did little Bernadette at Lourdes and pray with childlike trust in you that as we contemplate your glorious appearance at Lourdes, you will look with mercy on our present petition and secure for us a favorable answer to the request for which we are making this novena. <br> (Mention your request here…) O Brilliant star of purity, Mary Immaculate, Our Lady of Lourdes, glorious in your Assumption, triumphant in your coronation, show unto us the mercy of the Mother of God, Virgin Mary, Queen and Mother, be our comfort, hope, strength, and consolation. Amen. Our Lady of Lourdes, pray for us. Saint Bernadette, pray for us.  <br> Say 1: Our Father…  Say 1: Hail Mary… Say 1: Glory Be…'
        //novena2Pic.src= './novenaImages/ladyOfGuadalupe.jpg';
    }

    function margaretOfCortona(){
        Novena3.innerHTML = 'St. Margaret Of Cortona <br> February 14 - February 22'
        Novena3A.innerHTML = 'Starts the 14th!'
        Novena3sub.innerHTML = 'Feast Day <br> February 22'
        Novena3subA.innerHTML = 'O glorious St. Margaret, you embarked on a life of penance and poverty after you repented of your sins. Jesus touched your heart, and after imposing on yourself a rigorous life of fasting, Jesus talked and conversed with you, revealing to you his merciful heart that rejoices whenever a sinner returns to him. On controlling your appetite for food, you managed to free yourself from all temptations, including those of the flesh of which you were a victim for many years. Listen then to our petitions. May you bring our petitions to Jesus. Amen <br> (Mention your request here…) St. Margaret of Cortona, pray for us. <br> Say 1: Our Father…  Say 1: Hail Mary… Say 1: Glory Be…'
        novena3Pic.src = './novenaImages/margaretOfCortona.jpg';
    }

    function walburga(){
        Novena1.innerHTML = 'St. Walburga <br> February 17 - February 25'
        Novena1A.innerHTML = 'Starts the 17th!'
        Novena1sub.innerHTML = 'Feast Day <br> February 25'
        Novena1subA.innerHTML = 'St. Walburga, by your blessed life of love, God blessed you with the power to heal, to make whole the soul as well as the body. Beg for us what we cannot obtain for ourselves, and heal our world of sickness and sorrow. May God hear you, who lived so graciously for His glory, and send us the healing grace we need, through your powerful intercession. Amen. <br> (Mention your request here…) <br> Say 1: Our Father…  Say 1: Hail Mary… Say 1: Glory Be…'
        novena1Pic.src = './novenaImages/stWalburga.png';
    }

    function gabrielLadyOfSorrows(){
        Novena2.innerHTML = 'St. Gabriel Of Our Lady Of Sorrows <br> February 19 - February 27'
        Novena2A.innerHTML = 'Starts the 19th!'
        Novena2sub.innerHTML = 'Feast Day <br> February 27'
        Novena2subA.innerHTML = 'Lord, you gave Saint Gabriel of Our Lady of Sorrows a special privilege of entering into the passion of Your Son and into the compassion of his Virgin Mother, Mary. Teach us to contemplate with his eyes the very mystery of salvation and to grow in love in the spirit of joy. Amen <br> (Mention your request here…) Saint Gabriel of Our Lady of Sorrows, pray for us <br> Say 1: Our Father…  Say 1: Hail Mary… Say 1: Glory Be…'
        novena2Pic.src= './novenaImages/stGabrielOfSorrows.jpg';
    }

    function johnOfGod(){
        Novena3.innerHTML = 'St. John Of God <br> February 29 - March 8'
        Novena3A.innerHTML = 'Starts the 29th!'
        Novena3sub.innerHTML = 'Feast Day <br> March 8'
        Novena3subA.innerHTML = 'Saint John of God, heavenly Patron of the Sick, I come to you in prayer to seek your help in my present sickness. Through the love which Jesus had for you in choosing you for the sublime vocation of serving the sick, and through the tender affection with which the Blessed Virgin Mary placed upon your head a crown of thorns as a symbol of the sufferings you would undergo in the service of the sick to attain to your crown of glory, I beg you to intercede for me to Jesus and Mary that They may grant me a cure, if this should be according to the Will of God. How patiently you bore the sufferings of your own disease! Teach me to carry with cheerful resignation the cross that God has given me. Let me never complain or lose courage. Help me to understand that suffering is a very important means of sanctifying my soul, of atoning for my many sins, and of reaping a plentiful harvest of merit for Heaven. I trust in your great love for the sick and in the power of your intercession to help them. <br> Help me, good St. John, and beg the God whose name you bear to touch me as He touched the sick while on earth, that through His almighty power health may return to my body. And as you derived strength in your own sufferings from the crucifix, so may I be able to say what you did to Jesus Crucified: “Lord, Thy thorns are my roses and Thy sufferings my paradise.” Good Saint John, lover of those who suffer and special Patron of the Sick, I confidently place before you my earnest petition. <br> (Mention your request here…) <br> I beg you to recommend my request to Mary, the Mother of Sorrows and Health of the Sick, that both Mary and you may present it to Jesus, the Divine Physician. Saint John of God, patron of the Sick and beloved of Jesus and Mary, pray to Them for me and obtain my request. (Three times.) Saint John of God, Patron of the Sick, pray for us. <br> Say 1: Our Father…  Say 1: Hail Mary… Say 1: Glory Be…'
        novena3Pic.src = './novenaImages/stJohnOfGod.jpg';
    }


    
    //MARY UNDOER OF KNOTS
    if (novenaDay == '9/15/2023') {
        MaryOfKnots();
        Novena1A.innerHTML = 'Starts the 20th!';
    }
    else if (novenaDay == '9/16/2023') {
        MaryOfKnots();
        Novena1A.innerHTML = 'Starts the 20th!';
    }
    else if (novenaDay == '9/17/2023') {
        MaryOfKnots();
        Novena1A.innerHTML = 'Starts the 20th!';
    }
    else if (novenaDay == '9/18/2023') {
        MaryOfKnots();
        Novena1A.innerHTML = 'Starts the 20th!';
    }
    else if (novenaDay == '9/19/2023') {
        MaryOfKnots();
        Novena1A.innerHTML = 'Starts the 20th!';
    }
    else if (novenaDay == '9/20/2023') {
        MaryOfKnots();
        Novena1A.innerHTML = 'Day 1';
    }
    else if (novenaDay == '9/21/2023') {
        MaryOfKnots();
        Novena1A.innerHTML = 'Day 2';
    }
    else if (novenaDay == '9/22/2023') {
        MaryOfKnots();
        Novena1A.innerHTML = 'Day 3';
    }
    else if (novenaDay == '9/23/2023') {
        MaryOfKnots();
        Novena1A.innerHTML = 'Day 4';
    }
    else if (novenaDay == '9/24/2023') {
        MaryOfKnots();
        Novena1A.innerHTML = 'Day 5';
    }
    else if (novenaDay == '9/25/2023') {
        MaryOfKnots();
        Novena1A.innerHTML = 'Day 6';
    }
    else if (novenaDay == '9/26/2023') {
        MaryOfKnots();
        Novena1A.innerHTML = 'Day 7';
    }
    else if (novenaDay == '9/27/2023') {
        MaryOfKnots();
        Novena1A.innerHTML = 'Day 8';
    }
    else if (novenaDay == '9/28/2023') {
        MaryOfKnots();
        Novena1A.innerHTML = 'Day 9';
    }



    //MICHAEL ARCH ANGEL
    if (novenaDay == '9/16/2023'){
        michaelArchAngel()
        Novena2A.innerHTML = 'Starts the 21st!'
    }
    else if (novenaDay == '9/17/2023'){
        michaelArchAngel()
        Novena2A.innerHTML = 'Starts the 21st!'
    }
    else if (novenaDay == '9/18/2023'){
        michaelArchAngel()
        Novena2A.innerHTML = 'Starts the 21st!'
    }
    else if (novenaDay == '9/19/2023'){
        michaelArchAngel()
        Novena2A.innerHTML = 'Starts the 21st!'
    }
    else if (novenaDay == '9/20/2023'){
        michaelArchAngel()
        Novena2A.innerHTML = 'Starts the 21st!'
    }
    else if (novenaDay == '9/21/2023'){
        michaelArchAngel()
        Novena2A.innerHTML = 'Day 1';
    }
    else if (novenaDay == '9/22/2023'){
        michaelArchAngel()
        Novena2A.innerHTML = 'Day 2';
    }
    else if (novenaDay == '9/23/2023'){
        michaelArchAngel()
        Novena2A.innerHTML = 'Day 3';
    }
    else if (novenaDay == '9/24/2023'){
        michaelArchAngel()
        Novena2A.innerHTML = 'Day 4';
    }
    else if (novenaDay == '9/25/2023'){
        michaelArchAngel()
        Novena2A.innerHTML = 'Day 5';
    }
    else if (novenaDay == '9/26/2023'){
        michaelArchAngel()
        Novena2A.innerHTML = 'Day 6';
    }
    else if (novenaDay == '9/27/2023'){
        michaelArchAngel()
        Novena2A.innerHTML = 'Day 7';
    }
    else if (novenaDay == '9/28/2023'){
        michaelArchAngel()
        Novena2A.innerHTML = 'Day 8';
    }
    else if (novenaDay == '9/29/2023'){
        michaelArchAngel()
        Novena2A.innerHTML = 'Day 9';
    }


        //Therese
    if (novenaDay == '9/21/2023') {
        therese();
        Novena3A.innerHTML = 'Starts the 23rd!';
    }
    else if (novenaDay == '9/22/2023') {
        therese();
        Novena3A.innerHTML = 'Starts the 23rd!';
    }
    else if (novenaDay == '9/23/2023') {
        therese();
        Novena3A.innerHTML = 'Day 1';
    }
    else if (novenaDay == '9/24/2023') {
        therese();
        Novena3A.innerHTML = 'Day 2';
    }
    else if (novenaDay == '9/25/2023') {
        therese();
        Novena3A.innerHTML = 'Day 3';
    }
    else if (novenaDay == '9/26/2023') {
        therese();
        Novena3A.innerHTML = 'Day 4';
    }
    else if (novenaDay == '9/27/2023') {
        therese();
        Novena3A.innerHTML = 'Day 5';
    }
    else if (novenaDay == '9/28/2023') {
        therese();
        Novena3A.innerHTML = 'Day 6';
    }
    else if (novenaDay == '9/29/2023') {
        therese();
        Novena3A.innerHTML = 'Day 7';
    }
    else if (novenaDay == '9/30/2023') {
        therese();
        Novena3A.innerHTML = 'Day 8';
    }
    else if (novenaDay == '10/1/2023') {
        therese();
        Novena3A.innerHTML = 'Day 9';
    }

    //Faustina
    if (novenaDay == '9/29/2023') {
        faustina();
        Novena1A.innerHTML = 'Day 3';
    }
    else if (novenaDay == '9/30/2023') {
        faustina();
        Novena1A.innerHTML = 'Day 4';
    }
    else if (novenaDay == '10/1/2023') {
        faustina();
        Novena1A.innerHTML = 'Day 5';
    }
    else if (novenaDay == '10/2/2023') {
        faustina();
        Novena1A.innerHTML = 'Day 6';
    }
    else if (novenaDay == '10/3/2023') {
        faustina();
        Novena1A.innerHTML = 'Day 7';
    }
    else if (novenaDay == '10/4/2023') {
        faustina();
        Novena1A.innerHTML = 'Day 8';
    }
    else if (novenaDay == '10/5/2023') {
        faustina();
        Novena1A.innerHTML = 'Day 9';
    }

    //Our Lady Rosary
    if (novenaDay == '9/30/2023'){
        LadyOfRosary()
        Novena2A.innerHTML = 'Day 2'
    }
    else if (novenaDay == '10/1/2023'){
        LadyOfRosary()
        Novena2A.innerHTML = 'Day 3'
    }
    else if (novenaDay == '10/2/2023'){
        LadyOfRosary()
        Novena2A.innerHTML = 'Day 4'
    }
    else if (novenaDay == '10/3/2023'){
        LadyOfRosary()
        Novena2A.innerHTML = 'Day 5'
    }
    else if (novenaDay == '10/4/2023'){
        LadyOfRosary()
        Novena2A.innerHTML = 'Day 6'
    }
    else if (novenaDay == '10/5/2023'){
        LadyOfRosary()
        Novena2A.innerHTML = 'Day 7';
    }
    else if (novenaDay == '10/6/2023'){
        LadyOfRosary()
        Novena2A.innerHTML = 'Day 8';
    }
    else if (novenaDay == '10/7/2023'){
        LadyOfRosary()
        Novena2A.innerHTML = 'Day 9';
    }

    //Teresa Of Avila
    if (novenaDay == '10/2/2023') {
        teresaOfAvila()
        Novena3A.innerHTML = 'Starts the 7th';
    }
    else if (novenaDay == '10/3/2023') {
        teresaOfAvila()
        Novena3A.innerHTML = 'Starts the 7th';
    }
    else if (novenaDay == '10/4/2023') {
        teresaOfAvila()
        Novena3A.innerHTML = 'Starts the 7th';
    }
    else if (novenaDay == '10/5/2023') {
        teresaOfAvila()
        Novena3A.innerHTML = 'Starts the 7th';
    }
    else if (novenaDay == '10/6/2023') {
        teresaOfAvila()
        Novena3A.innerHTML = 'Starts the 7th';
    }
    else if (novenaDay == '10/7/2023') {
        teresaOfAvila()
        Novena3A.innerHTML = 'Day 1';
    }
    else if (novenaDay == '10/8/2023') {
        teresaOfAvila()
        Novena3A.innerHTML = 'Day 2';
    }
    else if (novenaDay == '10/9/2023') {
        teresaOfAvila()
        Novena3A.innerHTML = 'Day 3';
    }
    else if (novenaDay == '10/10/2023') {
        teresaOfAvila()
        Novena3A.innerHTML = 'Day 4';
    }
    else if (novenaDay == '10/11/2023') {
        teresaOfAvila()
        Novena3A.innerHTML = 'Day 5';
    }
    else if (novenaDay == '10/12/2023') {
        teresaOfAvila()
        Novena3A.innerHTML = 'Day 6';
    }
    else if (novenaDay == '10/13/2023') {
        teresaOfAvila()
        Novena3A.innerHTML = 'Day 7';
    }
    else if (novenaDay == '10/14/2023') {
        teresaOfAvila()
        Novena3A.innerHTML = 'Day 8';
    }
    else if (novenaDay == '10/15/2023') {
        teresaOfAvila()
        Novena3A.innerHTML = 'Day 9';
    }

        //JohnPaulII
    if (novenaDay == '10/6/2023') {
        johnPaulII();
        Novena1A.innerHTML = 'Starts the 14th!';
    }
    else if (novenaDay == '10/7/2023') {
        johnPaulII();
        Novena1A.innerHTML = 'Starts the 14th!';
    }
    else if (novenaDay == '10/8/2023') {
        johnPaulII();
        Novena1A.innerHTML = 'Starts the 14th!';
    }
    else if (novenaDay == '10/9/2023') {
        johnPaulII();
        Novena1A.innerHTML = 'Starts the 14th!';
    }
    else if (novenaDay == '10/10/2023') {
        johnPaulII();
        Novena1A.innerHTML = 'Starts the 14th!';
    }
    else if (novenaDay == '10/11/2023') {
        johnPaulII();
        Novena1A.innerHTML = 'Starts the 14th!';
    }
    else if (novenaDay == '10/12/2023') {
        johnPaulII();
        Novena1A.innerHTML = 'Starts the 14th!';
    }
    else if (novenaDay == '10/13/2023') {
        johnPaulII();
        Novena1A.innerHTML = 'Starts the 14th!';
    }
    else if (novenaDay == '10/14/2023') {
        johnPaulII();
        Novena1A.innerHTML = 'Day 1';
    }
    else if (novenaDay == '10/15/2023') {
        johnPaulII();
        Novena1A.innerHTML = 'Day 2';
    }
    else if (novenaDay == '10/16/2023') {
        johnPaulII();
        Novena1A.innerHTML = 'Day 3';
    }
    else if (novenaDay == '10/17/2023') {
        johnPaulII();
        Novena1A.innerHTML = 'Day 4';
    }
    else if (novenaDay == '10/18/2023') {
        johnPaulII();
        Novena1A.innerHTML = 'Day 5';
    }
    else if (novenaDay == '10/19/2023') {
        johnPaulII();
        Novena1A.innerHTML = 'Day 6';
    }
    else if (novenaDay == '10/20/2023') {
        johnPaulII();
        Novena1A.innerHTML = 'Day 7';
    }
    else if (novenaDay == '10/21/2023') {
        johnPaulII();
        Novena1A.innerHTML = 'Day 8';
    }
    else if (novenaDay == '10/22/2023') {
        johnPaulII();
        Novena1A.innerHTML = 'Day 9';
    }

    //St Jude
    if (novenaDay == '10/8/2023'){
        jude()
        Novena2A.innerHTML = 'Starts the 20th'
    }
    else if (novenaDay == '10/9/2023'){
        jude()
        Novena2A.innerHTML = 'Starts the 20th'
    }
    else if (novenaDay == '10/10/2023'){
        jude()
        Novena2A.innerHTML = 'Starts the 20th'
    }
    else if (novenaDay == '10/11/2023'){
        jude()
        Novena2A.innerHTML = 'Starts the 20th'
    }
    else if (novenaDay == '10/12/2023'){
        jude()
        Novena2A.innerHTML = 'Starts the 20th'
    }
    else if (novenaDay == '10/13/2023'){
        jude()
        Novena2A.innerHTML = 'Starts the 20th';
    }
    else if (novenaDay == '10/14/2023'){
        jude()
        Novena2A.innerHTML = 'Starts the 20th';
    }
    else if (novenaDay == '10/15/2023'){
        jude()
        Novena2A.innerHTML = 'Starts the 20th';
    }
    else if (novenaDay == '10/16/2023'){
        jude()
        Novena2A.innerHTML = 'Starts the 20th';
    }
    else if (novenaDay == '10/17/2023'){
        jude()
        Novena2A.innerHTML = 'Starts the 20th';
    }
    else if (novenaDay == '10/18/2023'){
        jude()
        Novena2A.innerHTML = 'Starts the 20th';
    }
    else if (novenaDay == '10/19/2023'){
        jude()
        Novena2A.innerHTML = 'Starts the 20th';
    }
    else if (novenaDay == '10/20/2023'){
        jude()
        Novena2A.innerHTML = 'Day 1';
    }
    else if (novenaDay == '10/21/2023'){
        jude()
        Novena2A.innerHTML = 'Day 2';
    }
    else if (novenaDay == '10/22/2023'){
        jude()
        Novena2A.innerHTML = 'Day 3';
    }
    else if (novenaDay == '10/23/2023'){
        jude()
        Novena2A.innerHTML = 'Day 4';
    }
    else if (novenaDay == '10/24/2023'){
        jude()
        Novena2A.innerHTML = 'Day 5';
    }
    else if (novenaDay == '10/25/2023'){
        jude()
        Novena2A.innerHTML = 'Day 6';
    }
    else if (novenaDay == '10/26/2023'){
        jude()
        Novena2A.innerHTML = 'Day 7';
    }
    else if (novenaDay == '10/27/2023'){
        jude()
        Novena2A.innerHTML = 'Day 8';
    }
    else if (novenaDay == '10/28/2023'){
        jude()
        Novena2A.innerHTML = 'Day 9';
    }

    //ALL SAINTS
    if (novenaDay == '10/16/2023') {
        allSaints()
        Novena3A.innerHTML = 'Starts the 24th';
    }
    else if (novenaDay == '10/17/2023') {
        allSaints()
        Novena3A.innerHTML = 'Starts the 24th';
    }
    else if (novenaDay == '10/18/2023') {
        allSaints()
        Novena3A.innerHTML = 'Starts the 24th';
    }
    else if (novenaDay == '10/19/2023') {
        allSaints()
        Novena3A.innerHTML = 'Starts the 24th';
    }
    else if (novenaDay == '10/20/2023') {
        allSaints()
        Novena3A.innerHTML = 'Starts the 24th';
    }
    else if (novenaDay == '10/21/2023') {
        allSaints()
        Novena3A.innerHTML = 'Starts the 24th';
    }
    else if (novenaDay == '10/22/2023') {
        allSaints()
        Novena3A.innerHTML = 'Starts the 24th';
    }
    else if (novenaDay == '10/23/2023') {
        allSaints()
        Novena3A.innerHTML = 'Starts the 24th';
    }
    else if (novenaDay == '10/24/2023') {
        allSaints()
        Novena3A.innerHTML = 'Day 1';
    }
    else if (novenaDay == '10/25/2023') {
        allSaints()
        Novena3A.innerHTML = 'Day 2';
    }
    else if (novenaDay == '10/26/2023') {
        allSaints()
        Novena3A.innerHTML = 'Day 3';
    }
    else if (novenaDay == '10/27/2023') {
        allSaints()
        Novena3A.innerHTML = 'Day 4';
    }
    else if (novenaDay == '10/28/2023') {
        allSaints()
        Novena3A.innerHTML = 'Day 5';
    }
    else if (novenaDay == '10/29/2023') {
        allSaints()
        Novena3A.innerHTML = 'Day 6';
    }
    else if (novenaDay == '10/30/2023') {
        allSaints()
        Novena3A.innerHTML = 'Day 7';
    }
    else if (novenaDay == '10/31/2023') {
        allSaints()
        Novena3A.innerHTML = 'Day 8';
    }
    else if (novenaDay == '11/1/2023') {
        allSaints()
        Novena3A.innerHTML = 'Day 9';
    }



    //Martin Tours
    if (novenaDay == '10/23/2023') {
        martinTours();
        Novena1A.innerHTML = 'Starts the 3rd!';
    }
    if (novenaDay == '10/24/2023') {
        martinTours();
        Novena1A.innerHTML = 'Starts the 3rd!';
    }
    if (novenaDay == '10/25/2023') {
        martinTours();
        Novena1A.innerHTML = 'Starts the 3rd!';
    }
    if (novenaDay == '10/26/2023') {
        martinTours();
        Novena1A.innerHTML = 'Starts the 3rd!';
    }
    if (novenaDay == '10/27/2023') {
        martinTours();
        Novena1A.innerHTML = 'Starts the 3rd!';
    }
    if (novenaDay == '10/28/2023') {
        martinTours();
        Novena1A.innerHTML = 'Starts the 3rd!';
    }
    if (novenaDay == '10/29/2023') {
        martinTours();
        Novena1A.innerHTML = 'Starts the 3rd!';
    }
    if (novenaDay == '10/30/2023') {
        martinTours();
        Novena1A.innerHTML = 'Starts the 3rd!';
    }
    if (novenaDay == '10/31/2023') {
        martinTours();
        Novena1A.innerHTML = 'Starts the 3rd!';
    }
    if (novenaDay == '11/01/2023') {
        martinTours();
        Novena1A.innerHTML = 'Starts the 3rd!';
    }
    if (novenaDay == '11/02/2023') {
        martinTours();
        Novena1A.innerHTML = 'Starts the 3rd!';
    }
    if (novenaDay == '11/03/2023') {
        martinTours();
        Novena1A.innerHTML = 'Day 1';
    }
    else if (novenaDay == '11/04/2023') {
        martinTours();
        Novena1A.innerHTML = 'Day 2';
    }
    else if (novenaDay == '11/05/2023') {
        martinTours();
        Novena1A.innerHTML = 'Day 3';
    }
    else if (novenaDay == '11/06/2023') {
        martinTours();
        Novena1A.innerHTML = 'Day 4';
    }
    else if (novenaDay == '11/07/2023') {
        martinTours();
        Novena1A.innerHTML = 'Day 5';
    }
    else if (novenaDay == '11/08/2023') {
        martinTours();
        Novena1A.innerHTML = 'Day 6';
    }
    else if (novenaDay == '11/09/2023') {
        martinTours();
        Novena1A.innerHTML = 'Day 7';
    }
    else if (novenaDay == '11/10/2023') {
        martinTours();
        Novena1A.innerHTML = 'Day 8';
    }
    else if (novenaDay == '11/11/2023') {
        martinTours();
        Novena1A.innerHTML = 'Day 9';
    }


    //frances Xaiver Cab
    if (novenaDay == '10/29/2023'){
        francesXaiver()
        Novena2A.innerHTML = 'Starts the 5th!'
    }
    else if (novenaDay == '10/30/2023'){
        francesXaiver()
        Novena2A.innerHTML = 'Starts the 5th!'
    }
    else if (novenaDay == '10/31/2023'){
        francesXaiver()
        Novena2A.innerHTML = 'Starts the 5th!'
    }
    else if (novenaDay == '11/01/2023'){
        francesXaiver()
        Novena2A.innerHTML = 'Starts the 5th!'
    }
    else if (novenaDay == '11/02/2023'){
        francesXaiver()
        Novena2A.innerHTML = 'Starts the 5th!'
    }
    else if (novenaDay == '11/03/2023'){
        francesXaiver()
        Novena2A.innerHTML = 'Starts the 5th!';
    }
    else if (novenaDay == '11/04/2023'){
        francesXaiver()
        Novena2A.innerHTML = 'Starts the 5th!';
    }
    else if (novenaDay == '11/05/2023'){
        francesXaiver()
        Novena2A.innerHTML = 'Day 1';
    }
    else if (novenaDay == '11/06/2023'){
        francesXaiver()
        Novena2A.innerHTML = 'Day 2';
    }
    else if (novenaDay == '11/07/2023'){
        francesXaiver()
        Novena2A.innerHTML = 'Day 3';
    }
    else if (novenaDay == '11/08/2023'){
        francesXaiver()
        Novena2A.innerHTML = 'Day 4';
    }
    else if (novenaDay == '11/09/2023'){
        francesXaiver()
        Novena2A.innerHTML = 'Day 5';
    }
    else if (novenaDay == '11/10/2023'){
        francesXaiver()
        Novena2A.innerHTML = 'Day 6';
    }
    else if (novenaDay == '11/11/2023'){
        francesXaiver()
        Novena2A.innerHTML = 'Day 7';
    }
    else if (novenaDay == '11/12/2023'){
        francesXaiver()
        Novena2A.innerHTML = 'Day 8';
    }
    else if (novenaDay == '11/13/2023'){
        francesXaiver()
        Novena2A.innerHTML = 'Day 9';
    }



    //St. Gertrude
    if (novenaDay == '11/02/2023') {
        gertrude()
        Novena3A.innerHTML = 'Starts the 8th!';
    }
    else if (novenaDay == '11/03/2023') {
        gertrude()
        Novena3A.innerHTML = 'Starts the 8th!';
    }
    else if (novenaDay == '11/04/2023') {
        gertrude()
        Novena3A.innerHTML = 'Starts the 8th!';
    }
    else if (novenaDay == '11/05/2023') {
        gertrude()
        Novena3A.innerHTML = 'Starts the 8th!';
    }
    else if (novenaDay == '11/06/2023') {
        gertrude()
        Novena3A.innerHTML = 'Starts the 8th!';
    }
    else if (novenaDay == '11/07/2023') {
        gertrude()
        Novena3A.innerHTML = 'Starts the 8th!';
    }
    else if (novenaDay == '11/08/2023') {
        gertrude()
        Novena3A.innerHTML = 'Day 1';
    }
    else if (novenaDay == '11/09/2023') {
        gertrude()
        Novena3A.innerHTML = 'Day 2';
    }
    else if (novenaDay == '11/10/2023') {
        gertrude()
        Novena3A.innerHTML = 'Day 3';
    }
    else if (novenaDay == '11/11/2023') {
        gertrude()
        Novena3A.innerHTML = 'Day 4';
    }
    else if (novenaDay == '11/12/2023') {
        gertrude()
        Novena3A.innerHTML = 'Day 5';
    }
    else if (novenaDay == '11/13/2023') {
        gertrude()
        Novena3A.innerHTML = 'Day 6';
    }
    else if (novenaDay == '11/14/2023') {
        gertrude()
        Novena3A.innerHTML = 'Day 7';
    }
    else if (novenaDay == '11/15/2023') {
        gertrude()
        Novena3A.innerHTML = 'Day 8';
    }
    else if (novenaDay == '11/16/2023') {
        gertrude()
        Novena3A.innerHTML = 'Day 9';
    }


    //Cecilia
    if (novenaDay == '11/12/2023') {
        cecilia();
        Novena1A.innerHTML = 'Starts the 14th!';
    }
    if (novenaDay == '11/13/2023') {
        cecilia();
        Novena1A.innerHTML = 'Starts the 14th!';
    }
    if (novenaDay == '11/14/2023') {
        cecilia();
        Novena1A.innerHTML = 'Day 1';
    }
    if (novenaDay == '11/15/2023') {
        cecilia();
        Novena1A.innerHTML = 'Day 2';
    }
    if (novenaDay == '11/16/2023') {
        cecilia();
        Novena1A.innerHTML = 'Day 3';
    }
    else if (novenaDay == '11/17/2023') {
        cecilia();
        Novena1A.innerHTML = 'Day 4';
    }
    else if (novenaDay == '11/18/2023') {
        cecilia();
        Novena1A.innerHTML = 'Day 5';
    }
    else if (novenaDay == '11/19/2023') {
        cecilia();
        Novena1A.innerHTML = 'Day 6';
    }
    else if (novenaDay == '11/20/2023') {
        cecilia();
        Novena1A.innerHTML = 'Day 7';
    }
    else if (novenaDay == '11/21/2023') {
        cecilia();
        Novena1A.innerHTML = 'Day 8';
    }
    else if (novenaDay == '11/22/2023') {
        cecilia();
        Novena1A.innerHTML = 'Day 9';
    }

    
    //Miraculous Medal
    if (novenaDay == '11/14/2023'){
        miraculousMedal()
        Novena2A.innerHTML = 'Starts the 20th!';
    }
    else if (novenaDay == '11/15/2023'){
        miraculousMedal()
        Novena2A.innerHTML = 'Starts the 20th!';
    }
    else if (novenaDay == '11/16/2023'){
        miraculousMedal()
        Novena2A.innerHTML = 'Starts the 20th!';
    }
    else if (novenaDay == '11/17/2023'){
        miraculousMedal()
        Novena2A.innerHTML = 'Starts the 20th!';
    }
    else if (novenaDay == '11/18/2023'){
        miraculousMedal()
        Novena2A.innerHTML = 'Starts the 20th!';
    }
    else if (novenaDay == '11/19/2023'){
        miraculousMedal()
        Novena2A.innerHTML = 'Starts the 20th!';
    }
    else if (novenaDay == '11/20/2023'){
        miraculousMedal()
        Novena2A.innerHTML = 'Day 1';
    }
    else if (novenaDay == '11/21/2023'){
        miraculousMedal()
        Novena2A.innerHTML = 'Day 2';
    }
    else if (novenaDay == '11/22/2023'){
        miraculousMedal()
        Novena2A.innerHTML = 'Day 3';
    }
    else if (novenaDay == '11/23/2023'){
        miraculousMedal()
        Novena2A.innerHTML = 'Day 4';
    }
    else if (novenaDay == '11/24/2023'){
        miraculousMedal()
        Novena2A.innerHTML = 'Day 5';
    }
    else if (novenaDay == '11/25/2023'){
        miraculousMedal()
        Novena2A.innerHTML = 'Day 6';
    }
    else if (novenaDay == '11/26/2023'){
        miraculousMedal()
        Novena2A.innerHTML = 'Day 7';
    }
    else if (novenaDay == '11/27/2023'){
        miraculousMedal()
        Novena2A.innerHTML = 'Day 8';
    }
    else if (novenaDay == '11/28/2023'){
        miraculousMedal()
        Novena2A.innerHTML = 'Day 9';
    }

    //St. Barbara
    if (novenaDay == '11/17/2023') {
        barbara()
        Novena3A.innerHTML = 'Starts the 26th!';
    }
    else if (novenaDay == '11/18/2023') {
        barbara()
        Novena3A.innerHTML = 'Starts the 26th!';
    }
    else if (novenaDay == '11/19/2023') {
        barbara()
        Novena3A.innerHTML = 'Starts the 26th!';
    }
    else if (novenaDay == '11/20/2023') {
        barbara()
        Novena3A.innerHTML = 'Starts the 26th!';
    }
    else if (novenaDay == '11/21/2023') {
        barbara()
        Novena3A.innerHTML = 'Starts the 26th!';
    }
    else if (novenaDay == '11/22/2023') {
        barbara()
        Novena3A.innerHTML = 'Starts the 26th!';
    }
    else if (novenaDay == '11/23/2023') {
        barbara()
        Novena3A.innerHTML = 'Starts the 26th!';
    }
    else if (novenaDay == '11/24/2023') {
        barbara()
        Novena3A.innerHTML = 'Starts the 26th!';
    }
    else if (novenaDay == '11/25/2023') {
        barbara()
        Novena3A.innerHTML = 'Starts the 26th!';
    }
    else if (novenaDay == '11/26/2023') {
        barbara()
        Novena3A.innerHTML = 'Day 1';
    }
    else if (novenaDay == '11/27/2023') {
        barbara()
        Novena3A.innerHTML = 'Day 2';
    }
    else if (novenaDay == '11/28/2023') {
        barbara()
        Novena3A.innerHTML = 'Day 3';
    }
    else if (novenaDay == '11/29/2023') {
        barbara()
        Novena3A.innerHTML = 'Day 4';
    }
    else if (novenaDay == '11/30/2023') {
        barbara()
        Novena3A.innerHTML = 'Day 5';
    }
    else if (novenaDay == '12/01/2023') {
        barbara()
        Novena3A.innerHTML = 'Day 6';
    }
    else if (novenaDay == '12/02/2023') {
        barbara()
        Novena3A.innerHTML = 'Day 7';
    }
    else if (novenaDay == '12/03/2023') {
        barbara()
        Novena3A.innerHTML = 'Day 8';
    }
    else if (novenaDay == '12/04/2023') {
        barbara()
        Novena3A.innerHTML = 'Day 9';
    }

    //Immaculate Conception
    if (novenaDay == '11/23/2023') {
        immaculateConception()
        Novena1A.innerHTML = 'Starts the 30th!';
    }
    if (novenaDay == '11/24/2023') {
        immaculateConception()
        Novena1A.innerHTML = 'Starts the 30th!';
    }
    if (novenaDay == '11/25/2023') {
        immaculateConception()
        Novena1A.innerHTML = 'Starts the 30th!';
    }
    if (novenaDay == '11/26/2023') {
        immaculateConception()
        Novena1A.innerHTML = 'Starts the 30th!';
    }
    if (novenaDay == '11/27/2023') {
        immaculateConception()
        Novena1A.innerHTML = 'Starts the 30th!';
    }
    else if (novenaDay == '11/28/2023') {
        immaculateConception()
        Novena1A.innerHTML = 'Starts the 30th!';
    }
    else if (novenaDay == '11/29/2023') {
        immaculateConception()
        Novena1A.innerHTML = 'Starts the 30th!';
    }
    else if (novenaDay == '11/30/2023') {
        immaculateConception()
        Novena1A.innerHTML = 'Day 1';
    }
    else if (novenaDay == '12/01/2023') {
        immaculateConception()
        Novena1A.innerHTML = 'Day 2';
    }
    else if (novenaDay == '12/02/2023') {
        immaculateConception()
        Novena1A.innerHTML = 'Day 3';
    }
    else if (novenaDay == '12/03/2023') {
        immaculateConception()
        Novena1A.innerHTML = 'Day 4';
    }
    else if (novenaDay == '12/04/2023') {
        immaculateConception()
        Novena1A.innerHTML = 'Day 5';
    }
    else if (novenaDay == '12/05/2023') {
        immaculateConception()
        Novena1A.innerHTML = 'Day 6';
    }
    else if (novenaDay == '12/06/2023') {
        immaculateConception()
        Novena1A.innerHTML = 'Day 7';
    }
    else if (novenaDay == '12/07/2023') {
        immaculateConception()
        Novena1A.innerHTML = 'Day 8';
    }
    else if (novenaDay == '12/08/2023') {
        immaculateConception()
        Novena1A.innerHTML = 'Day 9';
    }

    //Guadalupe
    if (novenaDay == '11/29/2023'){
        guadalupe()
        Novena2A.innerHTML = 'Starts the 4th!';
    }
    else if (novenaDay == '11/30/2023'){
        guadalupe()
        Novena2A.innerHTML = 'Starts the 4th!';
    }
    else if (novenaDay == '12/01/2023'){
        guadalupe()
        Novena2A.innerHTML = 'Starts the 4th!';
    }
    else if (novenaDay == '12/02/2023'){
        guadalupe()
        Novena2A.innerHTML = 'Starts the 4th!';
    }
    else if (novenaDay == '12/03/2023'){
        guadalupe()
        Novena2A.innerHTML = 'Starts the 4th!';
    }
    else if (novenaDay == '12/04/2023'){
        guadalupe()
        Novena2A.innerHTML = 'Day 1';
    }
    else if (novenaDay == '12/05/2023'){
        guadalupe()
        Novena2A.innerHTML = 'Day 2';
    }
    else if (novenaDay == '12/06/2023'){
        guadalupe()
        Novena2A.innerHTML = 'Day 3';
    }
    else if (novenaDay == '12/07/2023'){
        guadalupe()
        Novena2A.innerHTML = 'Day 4';
    }
    else if (novenaDay == '12/08/2023'){
        guadalupe()
        Novena2A.innerHTML = 'Day 5';
    }
    else if (novenaDay == '12/09/2023'){
        guadalupe()
        Novena2A.innerHTML = 'Day 6';
    }
    else if (novenaDay == '12/10/2023'){
        guadalupe()
        Novena2A.innerHTML = 'Day 7';
    }
    else if (novenaDay == '12/11/2023'){
        guadalupe()
        Novena2A.innerHTML = 'Day 8';
    }
    else if (novenaDay == '12/12/2023'){
        guadalupe()
        Novena2A.innerHTML = 'Day 9';
    }

    //JOHN OF CROSS
    if (novenaDay == '12/05/2023') {
        johnOfCross()
        Novena3A.innerHTML = 'Starts the 6th!';
    }
    else if (novenaDay == '12/06/2023') {
        johnOfCross()
        Novena3A.innerHTML = 'Day 1';
    }
    else if (novenaDay == '12/07/2023') {
        johnOfCross()
        Novena3A.innerHTML = 'Day 2';
    }
    else if (novenaDay == '12/08/2023') {
        johnOfCross()
        Novena3A.innerHTML = 'Day 3';
    }
    else if (novenaDay == '12/09/2023') {
        johnOfCross()
        Novena3A.innerHTML = 'Day 4';
    }
    else if (novenaDay == '12/10/2023') {
        johnOfCross()
        Novena3A.innerHTML = 'Day 5';
    }
    else if (novenaDay == '12/11/2023') {
        johnOfCross()
        Novena3A.innerHTML = 'Day 6';
    }
    else if (novenaDay == '12/12/2023') {
        johnOfCross()
        Novena3A.innerHTML = 'Day 7';
    }
    else if (novenaDay == '12/13/2023') {
        johnOfCross()
        Novena3A.innerHTML = 'Day 8';
    }
    else if (novenaDay == '12/14/2023') {
        johnOfCross()
        Novena3A.innerHTML = 'Day 9';
    }


    //IGNATIUS OF ANTIOCH
    if (novenaDay == '12/09/2023') {
        ignatiusOfAntioch()
        Novena1A.innerHTML = 'Starts the 12th!';
    }
    if (novenaDay == '12/10/2023') {
        ignatiusOfAntioch()
        Novena1A.innerHTML = 'Starts the 12th!';
    }
    if (novenaDay == '12/11/2023') {
        ignatiusOfAntioch()
        Novena1A.innerHTML = 'Starts the 12th!';
    }
    if (novenaDay == '12/12/2023') {
        ignatiusOfAntioch()
        Novena1A.innerHTML = 'Day 1';
    }
    if (novenaDay == '12/13/2023') {
        ignatiusOfAntioch()
        Novena1A.innerHTML = 'Day 2';
    }
    else if (novenaDay == '12/14/2023') {
        ignatiusOfAntioch()
        Novena1A.innerHTML = 'Day 3';
    }
    else if (novenaDay == '12/15/2023') {
        ignatiusOfAntioch()
        Novena1A.innerHTML = 'Day 4';
    }
    else if (novenaDay == '12/16/2023') {
        ignatiusOfAntioch()
        Novena1A.innerHTML = 'Day 5';
    }
    else if (novenaDay == '12/17/2023') {
        ignatiusOfAntioch()
        Novena1A.innerHTML = 'Day 6';
    }
    else if (novenaDay == '12/18/2023') {
        ignatiusOfAntioch()
        Novena1A.innerHTML = 'Day 7';
    }
    else if (novenaDay == '12/19/2023') {
        ignatiusOfAntioch()
        Novena1A.innerHTML = 'Day 8';
    }
    else if (novenaDay == '12/20/2023') {
        ignatiusOfAntioch()
        Novena1A.innerHTML = 'Day 9';
    }
    
    //CHRISTMAS
    if (novenaDay == '12/13/2023'){
        christmas()
        Novena2A.innerHTML = 'Starts the 17th!';
    }
    else if (novenaDay == '12/14/2023'){
        christmas()
        Novena2A.innerHTML = 'Starts the 17th!';
    }
    else if (novenaDay == '12/15/2023'){
        christmas()
        Novena2A.innerHTML = 'Starts the 17th!';
    }
    else if (novenaDay == '12/16/2023'){
        christmas()
        Novena2A.innerHTML = 'Starts the 17th!';
    }
    else if (novenaDay == '12/17/2023'){
        christmas()
        Novena2A.innerHTML = 'Day 1';
    }
    else if (novenaDay == '12/18/2023'){
        christmas()
        Novena2A.innerHTML = 'Day 2';
    }
    else if (novenaDay == '12/19/2023'){
        christmas()
        Novena2A.innerHTML = 'Day 3';
    }
    else if (novenaDay == '12/20/2023'){
        christmas()
        Novena2A.innerHTML = 'Day 4';
    }
    else if (novenaDay == '12/21/2023'){
        christmas()
        Novena2A.innerHTML = 'Day 5';
    }
    else if (novenaDay == '12/22/2023'){
        christmas()
        Novena2A.innerHTML = 'Day 6';
    }
    else if (novenaDay == '12/23/2023'){
        christmas()
        Novena2A.innerHTML = 'Day 7';
    }
    else if (novenaDay == '12/24/2023'){
        christmas()
        Novena2A.innerHTML = 'Day 8';
    }
    else if (novenaDay == '12/25/2023'){
        christmas()
        Novena2A.innerHTML = 'Day 9';
    }


    //JOHN APOSTLE
    if (novenaDay == '12/15/2023') {
        johnApostle()
        Novena3A.innerHTML = 'Starts the 19th!';
    }
    else if (novenaDay == '12/16/2023') {
        johnApostle()
        Novena3A.innerHTML = 'Starts the 19th!';
    }
    else if (novenaDay == '12/17/2023') {
        johnApostle()
        Novena3A.innerHTML = 'Starts the 19th!';
    }
    else if (novenaDay == '12/18/2023') {
        johnApostle()
        Novena3A.innerHTML = 'Starts the 19th!';
    }
    else if (novenaDay == '12/19/2023') {
        johnApostle()
        Novena3A.innerHTML = 'Day 1';
    }
    else if (novenaDay == '12/20/2023') {
        johnApostle()
        Novena3A.innerHTML = 'Day 2';
    }
    else if (novenaDay == '12/21/2023') {
        johnApostle()
        Novena3A.innerHTML = 'Day 3';
    }
    else if (novenaDay == '12/22/2023') {
        johnApostle()
        Novena3A.innerHTML = 'Day 4';
    }
    else if (novenaDay == '12/23/2023') {
        johnApostle()
        Novena3A.innerHTML = 'Day 5';
    }
    else if (novenaDay == '12/24/2023') {
        johnApostle()
        Novena3A.innerHTML = 'Day 6';
    }
    else if (novenaDay == '12/25/2023') {
        johnApostle()
        Novena3A.innerHTML = 'Day 7';
    }    
    else if (novenaDay == '12/26/2023') {
        johnApostle()
        Novena3A.innerHTML = 'Day 8';
    }    
    else if (novenaDay == '12/27/2023') {
        johnApostle()
        Novena3A.innerHTML = 'Day 9';
    }

    //HOLY NAME JESUS
    if (novenaDay == '12/21/2023') {
        holyNameJesus()
        Novena1A.innerHTML = 'Starts the 26th!';
    }
    else if (novenaDay == '12/22/2023') {
        holyNameJesus()
        Novena1A.innerHTML = 'Starts the 26th!';
    }
    else if (novenaDay == '12/23/2023') {
        holyNameJesus()
        Novena1A.innerHTML = 'Starts the 26th!';
    }
    else if (novenaDay == '12/24/2023') {
        holyNameJesus()
        Novena1A.innerHTML = 'Starts the 26th!';
    }
    else if (novenaDay == '12/25/2023') {
        holyNameJesus()
        Novena1A.innerHTML = 'Starts the 26th!';
    }
    else if (novenaDay == '12/26/2023') {
        holyNameJesus()
        Novena1A.innerHTML = 'Day 1';
    }
    else if (novenaDay == '12/27/2023') {
        holyNameJesus()
        Novena1A.innerHTML = 'Day 2';
    }
    else if (novenaDay == '12/28/2023') {
        holyNameJesus()
        Novena1A.innerHTML = 'Day 3';
    }
    else if (novenaDay == '12/29/2023') {
        holyNameJesus()
        Novena1A.innerHTML = 'Day 4';
    }
    else if (novenaDay == '12/30/2023') {
        holyNameJesus()
        Novena1A.innerHTML = 'Day 5';
    }
    else if (novenaDay == '12/31/2023') {
        holyNameJesus()
        Novena1A.innerHTML = 'Day 6';
    }
    else if (novenaDay == '01/01/2024') {
        holyNameJesus()
        Novena1A.innerHTML = 'Day 7';
    }
    else if (novenaDay == '01/02/2024') {
        holyNameJesus()
        Novena1A.innerHTML = 'Day 8';
    }
    else if (novenaDay == '01/03/2024') {
        holyNameJesus()
        Novena1A.innerHTML = 'Day 9';
    }

    //ELIZABETH ANN
    if (novenaDay == '12/26/2023'){
        elizabethAnn()
        Novena2A.innerHTML = 'Starts the 27th!';
    }
    else if (novenaDay == '12/27/2023'){
        elizabethAnn()
        Novena2A.innerHTML = 'Day 1';
    }
    else if (novenaDay == '12/28/2023'){
        elizabethAnn()
        Novena2A.innerHTML = 'Day 2';
    }
    else if (novenaDay == '12/29/2023'){
        elizabethAnn()
        Novena2A.innerHTML = 'Day 3';
    }
    else if (novenaDay == '12/30/2023'){
        elizabethAnn()
        Novena2A.innerHTML = 'Day 4';
    }
    else if (novenaDay == '12/31/2023'){
        elizabethAnn()
        Novena2A.innerHTML = 'Day 5';
    }
    else if (novenaDay == '01/01/2024'){
        elizabethAnn()
        Novena2A.innerHTML = 'Day 6';
    }
    else if (novenaDay == '01/02/2023'){
        elizabethAnn()
        Novena2A.innerHTML = 'Day 7';
    }
    else if (novenaDay == '01/03/2023'){
        elizabethAnn()
        Novena2A.innerHTML = 'Day 8';
    }
    else if (novenaDay == '01/04/2023'){
        elizabethAnn()
        Novena2A.innerHTML = 'Day 9';
    }

    //John Neumann
    if (novenaDay == '12/28/2023') {
        johnNeumann()
        Novena3A.innerHTML = 'Day 1';
    }
    else if (novenaDay == '12/29/2023') {
        johnNeumann()
        Novena3A.innerHTML = 'Day 2';
    }
    else if (novenaDay == '12/30/2023') {
        johnNeumann()
        Novena3A.innerHTML = 'Day 3';
    }
    else if (novenaDay == '12/31/2023') {
        johnNeumann()
        Novena3A.innerHTML = 'Day 4';
    }
    else if (novenaDay == '01/01/2023') {
        johnNeumann()
        Novena3A.innerHTML = 'Day 5';
    }
    else if (novenaDay == '01/02/2023') {
        johnNeumann()
        Novena3A.innerHTML = 'Day 6';
    }
    else if (novenaDay == '01/03/2023') {
        johnNeumann()
        Novena3A.innerHTML = 'Day 7';
    }
    else if (novenaDay == '01/04/2023') {
        johnNeumann()
        Novena3A.innerHTML = 'Day 8';
    }
    else if (novenaDay == '01/05/2023') {
        johnNeumann()
        Novena3A.innerHTML = 'Day 9';
    }


    //St SEBASTION
    if (novenaDay == '01/04/2024') {
        sebastion()
        Novena1A.innerHTML = 'Starts the 12th';
    }
    else if (novenaDay == '01/05/2024') {
        sebastion()
        Novena1A.innerHTML = 'Starts the 12th';
    }
    else if (novenaDay == '01/06/2024') {
        sebastion()
        Novena1A.innerHTML = 'Starts the 12th';
    }
    else if (novenaDay == '01/07/2024') {
        sebastion()
        Novena1A.innerHTML = 'Starts the 12th';
    }
    else if (novenaDay == '01/08/2024') {
        sebastion()
        Novena1A.innerHTML = 'Starts the 12th';
    }
    else if (novenaDay == '01/09/2024') {
        sebastion()
        Novena1A.innerHTML = 'Starts the 12th';
    }
    else if (novenaDay == '01/10/2024') {
        sebastion()
        Novena1A.innerHTML = 'Starts the 12th';
    }
    else if (novenaDay == '01/11/2024') {
        sebastion()
        Novena1A.innerHTML = 'Starts the 12th';
    }
    else if (novenaDay == '01/12/2024') {
        sebastion()
        Novena1A.innerHTML = 'Day 1';
    }
    else if (novenaDay == '01/13/2024') {
        sebastion()
        Novena1A.innerHTML = 'Day 2';
    }
    else if (novenaDay == '01/14/2024') {
        sebastion()
        Novena1A.innerHTML = 'Day 3';
    }
    else if (novenaDay == '01/15/2024') {
        sebastion()
        Novena1A.innerHTML = 'Day 4';
    }
    else if (novenaDay == '01/16/2024') {
        sebastion()
        Novena1A.innerHTML = 'Day 5';
    }
    else if (novenaDay == '01/17/2024') {
        sebastion()
        Novena1A.innerHTML = 'Day 6';
    }
    else if (novenaDay == '01/18/2024') {
        sebastion()
        Novena1A.innerHTML = 'Day 7';
    }
    else if (novenaDay == '01/19/2024') {
        sebastion()
        Novena1A.innerHTML = 'Day 8';
    }
    else if (novenaDay == '01/20/2024') {
        sebastion()
        Novena1A.innerHTML = 'Day 9';
    }
    
    //AGNES
    if (novenaDay == '01/05/2023'){
        agnes()
        Novena2A.innerHTML = 'Starts the 27th!';
    }
    else if (novenaDay == '01/06/2023'){
        agnes()
        Novena2A.innerHTML = 'Day 1';
    }
    else if (novenaDay == '01/07/2023'){
        agnes()
        Novena2A.innerHTML = 'Day 2';
    }
    else if (novenaDay == '01/08/2023'){
        agnes()
        Novena2A.innerHTML = 'Day 3';
    }
    else if (novenaDay == '01/09/2023'){
        agnes()
        Novena2A.innerHTML = 'Day 4';
    }
    else if (novenaDay == '01/10/2023'){
        agnes()
        Novena2A.innerHTML = 'Day 5';
    }
    else if (novenaDay == '01/11/2024'){
        agnes()
        Novena2A.innerHTML = 'Day 6';
    }
    else if (novenaDay == '01/12/2023'){
        agnes()
        Novena2A.innerHTML = 'Day 7';
    }
    else if (novenaDay == '01/13/2023'){
        agnes()
        Novena2A.innerHTML = 'Day 1';
    }
    else if (novenaDay == '01/14/2023'){
        agnes()
        Novena2A.innerHTML = 'Day 2';
    }
    else if (novenaDay == '01/15/2023'){
        agnes()
        Novena2A.innerHTML = 'Day 3';
    }
    else if (novenaDay == '01/16/2023'){
        agnes()
        Novena2A.innerHTML = 'Day 4';
    }
    else if (novenaDay == '01/17/2023'){
        agnes()
        Novena2A.innerHTML = 'Day 5';
    }
    else if (novenaDay == '01/18/2023'){
        agnes()
        Novena2A.innerHTML = 'Day 6';
    }
    else if (novenaDay == '01/19/2023'){
        agnes()
        Novena2A.innerHTML = 'Day 7';
    }
    else if (novenaDay == '01/20/2023'){
        agnes()
        Novena2A.innerHTML = 'Day 8';
    }
    else if (novenaDay == '01/21/2023'){
        agnes()
        Novena2A.innerHTML = 'Day 9';
    }

    //FRANCIS DE SALES
    if (novenaDay == '01/05/2023') {
        francisDeSales()
        Novena3A.innerHTML = 'Starts the 16th!';
    }
    else if (novenaDay == '01/06/2023') {
        francisDeSales()
        Novena3A.innerHTML = 'Starts the 16th!';
    }
    else if (novenaDay == '01/07/2023') {
        francisDeSales()
        Novena3A.innerHTML = 'Starts the 16th!';
    }
    else if (novenaDay == '01/08/2023') {
        francisDeSales()
        Novena3A.innerHTML = 'Starts the 16th!';
    }
    else if (novenaDay == '01/09/2023') {
        francisDeSales()
        Novena3A.innerHTML = 'Starts the 16th!';
    }
    else if (novenaDay == '01/10/2023') {
        francisDeSales()
        Novena3A.innerHTML = 'Starts the 16th!';
    }
    else if (novenaDay == '01/11/2023') {
        francisDeSales()
        Novena3A.innerHTML = 'Starts the 16th!';
    }
    else if (novenaDay == '01/12/2023') {
        francisDeSales()
        Novena3A.innerHTML = 'Starts the 16th!';
    }
    else if (novenaDay == '01/13/2023') {
        francisDeSales()
        Novena3A.innerHTML = 'Starts the 16th!';
    }
    else if (novenaDay == '01/14/2023') {
        francisDeSales()
        Novena3A.innerHTML = 'Starts the 16th!';
    }
    else if (novenaDay == '01/15/2023') {
        francisDeSales()
        Novena3A.innerHTML = 'Starts the 16th!';
    }
    else if (novenaDay == '01/16/2023') {
        francisDeSales()
        Novena3A.innerHTML = 'Day 1';
    }
    else if (novenaDay == '01/17/2023') {
        francisDeSales()
        Novena3A.innerHTML = 'Day 2';
    }
    else if (novenaDay == '01/18/2023') {
        francisDeSales()
        Novena3A.innerHTML = 'Day 3';
    }
    else if (novenaDay == '01/19/2023') {
        francisDeSales()
        Novena3A.innerHTML = 'Day 4';
    }
    else if (novenaDay == '01/20/2023') {
        francisDeSales()
        Novena3A.innerHTML = 'Day 5';
    }
    else if (novenaDay == '01/21/2023') {
        francisDeSales()
        Novena3A.innerHTML = 'Day 6';
    }
    else if (novenaDay == '01/22/2023') {
        francisDeSales()
        Novena3A.innerHTML = 'Day 7';
    }
    else if (novenaDay == '01/23/2023') {
        francisDeSales()
        Novena3A.innerHTML = 'Day 8';
    }
    else if (novenaDay == '01/24/2023') {
        francisDeSales()
        Novena3A.innerHTML = 'Day 9';
    }



    //St John Bosco
    if (novenaDay == '01/21/2024') {
        johnBosco()
        Novena1A.innerHTML = 'Starts the 23rd!';
    }
    else if (novenaDay == '01/22/2024') {
        johnBosco()
        Novena1A.innerHTML = 'Starts the 23rd!';
    }
    else if (novenaDay == '01/23/2024') {
        johnBosco()
        Novena1A.innerHTML = 'Day 1';
    }
    else if (novenaDay == '01/24/2024') {
        johnBosco()
        Novena1A.innerHTML = 'Day 2';
    }
    else if (novenaDay == '01/25/2024') {
        johnBosco()
        Novena1A.innerHTML = 'Day 3';
    }
    else if (novenaDay == '01/26/2024') {
        johnBosco()
        Novena1A.innerHTML = 'Day 4';
    }
    else if (novenaDay == '01/27/2024') {
        johnBosco()
        Novena1A.innerHTML = 'Day 5';
    }
    else if (novenaDay == '01/28/2024') {
        johnBosco()
        Novena1A.innerHTML = 'Day 6';
    }
    else if (novenaDay == '01/29/2024') {
        johnBosco()
        Novena1A.innerHTML = 'Day 7';
    }
    else if (novenaDay == '01/30/2024') {
        johnBosco()
        Novena1A.innerHTML = 'Day 8';
    }
    else if (novenaDay == '01/31/2024') {
        johnBosco()
        Novena1A.innerHTML = 'Day 9';
    }


    //OUR LADY OF GOOD SUCCESS
    if (novenaDay == '01/22/2023'){
        ourLadyOfGoodSuccess()
        Novena2A.innerHTML = 'Starts the 25th!';
    }
    else if (novenaDay == '01/23/2023'){
        ourLadyOfGoodSuccess()
        Novena2A.innerHTML = 'Starts the 25th!';
    }
    else if (novenaDay == '01/24/2023'){
        ourLadyOfGoodSuccess()
        Novena2A.innerHTML = 'Starts the 25th!';
    }
    else if (novenaDay == '01/25/2023'){
        ourLadyOfGoodSuccess()
        Novena2A.innerHTML = 'Day 1';
    }
    else if (novenaDay == '01/26/2023'){
        ourLadyOfGoodSuccess()
        Novena2A.innerHTML = 'Day 2';
    }
    else if (novenaDay == '01/27/2023'){
        ourLadyOfGoodSuccess()
        Novena2A.innerHTML = 'Day 3';
    }
    else if (novenaDay == '01/28/2024'){
        ourLadyOfGoodSuccess()
        Novena2A.innerHTML = 'Day 4';
    }
    else if (novenaDay == '01/29/2023'){
        ourLadyOfGoodSuccess()
        Novena2A.innerHTML = 'Day 5';
    }
    else if (novenaDay == '01/30/2023'){
        ourLadyOfGoodSuccess()
        Novena2A.innerHTML = 'Day 6';
    }
    else if (novenaDay == '01/31/2023'){
        ourLadyOfGoodSuccess()
        Novena2A.innerHTML = 'Day 7';
    }
    else if (novenaDay == '02/01/2023'){
        ourLadyOfGoodSuccess()
        Novena2A.innerHTML = 'Day 8';
    }
    else if (novenaDay == '02/02/2023'){
        ourLadyOfGoodSuccess()
        Novena2A.innerHTML = 'Day 9';
    }

    //BAKHITA
    if (novenaDay == '01/25/2023') {
        bakhita()
        Novena3A.innerHTML = 'Starts the 31st!';
    }
    else if (novenaDay == '01/26/2023') {
        bakhita()
        Novena3A.innerHTML = 'Starts the 31st!';
    }
    else if (novenaDay == '01/27/2023') {
        bakhita()
        Novena3A.innerHTML = 'Starts the 31st!';
    }
    else if (novenaDay == '01/28/2023') {
        bakhita()
        Novena3A.innerHTML = 'Starts the 31st!';
    }
    else if (novenaDay == '01/29/2023') {
        bakhita()
        Novena3A.innerHTML = 'Starts the 31st!';
    }
    else if (novenaDay == '01/30/2023') {
        bakhita()
        Novena3A.innerHTML = 'Starts the 31st!';
    }
    else if (novenaDay == '01/31/2023') {
        bakhita()
        Novena3A.innerHTML = 'Day 1';
    }
    else if (novenaDay == '02/01/2023') {
        bakhita()
        Novena3A.innerHTML = 'Day 2';
    }
    else if (novenaDay == '02/02/2023') {
        bakhita()
        Novena3A.innerHTML = 'Day 3';
    }
    else if (novenaDay == '02/03/2023') {
        bakhita()
        Novena3A.innerHTML = 'Day 4';
    }
    else if (novenaDay == '02/04/2023') {
        bakhita()
        Novena3A.innerHTML = 'Day 5';
    }
    else if (novenaDay == '02/05/2023') {
        bakhita()
        Novena3A.innerHTML = 'Day 6';
    }
    else if (novenaDay == '02/06/2023') {
        bakhita()
        Novena3A.innerHTML = 'Day 7';
    }
    else if (novenaDay == '02/07/2023') {
        bakhita()
        Novena3A.innerHTML = 'Day 8';
    }
    else if (novenaDay == '02/08/2023') {
        bakhita()
        Novena3A.innerHTML = 'Day 9';
    }

    //St SCHOLASTICA
    if (novenaDay == '02/01/2024') {
        scholastica()
        Novena1A.innerHTML = 'Starts the 2nd';
    }
    else if (novenaDay == '02/02/2024') {
        scholastica()
        Novena1A.innerHTML = 'Day 1';
    }
    else if (novenaDay == '02/03/2024') {
        scholastica()
        Novena1A.innerHTML = 'Day 2';
    }
    else if (novenaDay == '02/04/2024') {
        scholastica()
        Novena1A.innerHTML = 'Day 3';
    }
    else if (novenaDay == '02/05/2024') {
        scholastica()
        Novena1A.innerHTML = 'Day 4';
    }
    else if (novenaDay == '02/06/2024') {
        scholastica()
        Novena1A.innerHTML = 'Day 5';
    }
    else if (novenaDay == '02/07/2024') {
        scholastica()
        Novena1A.innerHTML = 'Day 6';
    }
    else if (novenaDay == '02/08/2024') {
        scholastica()
        Novena1A.innerHTML = 'Day 7';
    }
    else if (novenaDay == '02/09/2024') {
        scholastica()
        Novena1A.innerHTML = 'Day 8';
    }
    else if (novenaDay == '02/10/2024') {
        scholastica()
        Novena1A.innerHTML = 'Day 9';
    }


    //OUR LADY OF LOURDES
    if (novenaDay == '02/03/2023'){
        ourLadyLourd()
        Novena2A.innerHTML = 'Day 1';
    }
    else if (novenaDay == '02/04/2023'){
        ourLadyLourd()
        Novena2A.innerHTML = 'Day 2';
    }
    else if (novenaDay == '02/05/2023'){
        ourLadyLourd()
        Novena2A.innerHTML = 'Day 3';
    }
    else if (novenaDay == '02/06/2023'){
        ourLadyLourd()
        Novena2A.innerHTML = 'Day 4';
    }
    else if (novenaDay == '02/07/2023'){
        ourLadyLourd()
        Novena2A.innerHTML = 'Day 5';
    }
    else if (novenaDay == '02/08/2023'){
        ourLadyLourd()
        Novena2A.innerHTML = 'Day 6';
    }
    else if (novenaDay == '02/09/2024'){
        ourLadyLourd()
        Novena2A.innerHTML = 'Day 7';
    }
    else if (novenaDay == '02/10/2023'){
        ourLadyLourd()
        Novena2A.innerHTML = 'Day 8';
    }
    else if (novenaDay == '02/11/2023'){
        ourLadyLourd()
        Novena2A.innerHTML = 'Day 9';
    }

    //MARGARET OF CORTONA
    if (novenaDay == '02/09/2023') {
        margaretOfCortona()
        Novena3A.innerHTML = 'Starts the 14th!';
    }
    else if (novenaDay == '02/10/2023') {
        margaretOfCortona()
        Novena3A.innerHTML = 'Starts the 14th!';
    }
    else if (novenaDay == '02/11/2023') {
        margaretOfCortona()
        Novena3A.innerHTML = 'Starts the 14th!';
    }
    else if (novenaDay == '02/12/2023') {
        margaretOfCortona()
        Novena3A.innerHTML = 'Starts the 14th!';
    }
    else if (novenaDay == '02/13/2023') {
        margaretOfCortona()
        Novena3A.innerHTML = 'Starts the 14th!';
    }
    else if (novenaDay == '02/14/2023') {
        margaretOfCortona()
        Novena3A.innerHTML = 'Day 1';
    }
    else if (novenaDay == '02/15/2023') {
        margaretOfCortona()
        Novena3A.innerHTML = 'Day 2';
    }
    else if (novenaDay == '02/16/2023') {
        margaretOfCortona()
        Novena3A.innerHTML = 'Day 3';
    }
    else if (novenaDay == '02/17/2023') {
        margaretOfCortona()
        Novena3A.innerHTML = 'Day 4';
    }
    else if (novenaDay == '02/18/2023') {
        margaretOfCortona()
        Novena3A.innerHTML = 'Day 5';
    }
    else if (novenaDay == '02/19/2023') {
        margaretOfCortona()
        Novena3A.innerHTML = 'Day 6';
    }
    else if (novenaDay == '02/20/2023') {
        margaretOfCortona()
        Novena3A.innerHTML = 'Day 7';
    }
    else if (novenaDay == '02/21/2023') {
        margaretOfCortona()
        Novena3A.innerHTML = 'Day 8';
    }
    else if (novenaDay == '02/22/2023') {
        margaretOfCortona()
        Novena3A.innerHTML = 'Day 9';
    }

}

