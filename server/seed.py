from app import app, bcrypt
from models import db, Investor, Message, Company
# from faker import Faker

# fake = Faker()

if __name__ == '__main__':
    with app.app_context():

        Investor.query.delete()
        Company.query.delete()
        Message.query.delete()

        Investors = []
        tim = Investor('Tim Charles', 'TimmyTom', 'timothy_charles@gmail.com', bcrypt.generate_password_hash('Password123').decode('utf-8'), "https://static.www.nfl.com/image/private/t_headshot_desktop/league/s2erlgjztwbsquplostx")
        bob = Investor('Bob Anthony', 'Anthonyb', 'bobAnthony@gmail.com', bcrypt.generate_password_hash('Password123').decode('utf-8'), "https://upload.wikimedia.org/wikipedia/en/thumb/c/c5/Bob_the_builder.jpg/220px-Bob_the_builder.jpg")
        jacky = Investor('Jacky Gell', 'JackyGeller', 'jacksgells@gmail.com', bcrypt.generate_password_hash('Password123').decode('utf-8'), "https://static.wikia.nocookie.net/brawlstars/images/5/52/Jacky_Skin-Default.png/revision/latest?cb=20200430211047")
        abraham = Investor('Abraham Shalom', 'Abe', 'abe_shalom@gmail.com', bcrypt.generate_password_hash('Password123').decode('utf-8'), "https://assetsnffrgf-a.akamaihd.net/assets/m/1102009454/univ/art/1102009454_univ_lsr_lg.jpg")
        carlos = Investor('Carlos Smith', 'Carlos_Smith', 'carlos_SMITH@gmail.com', bcrypt.generate_password_hash('Password123').decode('utf-8'), "https://b.fssta.com/uploads/application/mlb/headshots/7022.vresize.350.350.medium.6.png")
        freddy = Investor('Freddy Jenkins', 'JenkinsFreddy', 'fJenkins@gmail.com', bcrypt.generate_password_hash('Password123').decode('utf-8'), "https://static.wikia.nocookie.net/triple-a-fazbear/images/3/33/A_bear_who_bears_no_introduction2.png/revision/latest?cb=20200518050428")
        sandy = Investor('Sandy Cheeks', 'SandyC', 'sandycheeks@gmail.com', bcrypt.generate_password_hash('Password123').decode('utf-8'), "https://upload.wikimedia.org/wikipedia/en/thumb/a/a0/Sandy_Cheeks.svg/1200px-Sandy_Cheeks.svg.png")
        jennifer = Investor('Jennifer Bruno', 'JenB', 'jenB@gmail.com', bcrypt.generate_password_hash('Password123').decode('utf-8'), "https://media-cldnry.s-nbcnews.com/image/upload/t_fit-760w,f_auto,q_auto:best/newscms/2020_07/3227271/200212-jennifer-aniston-cs-900a.jpg")
        dennis = Investor('Dennis Bruno', 'DeeBruno', 'dennis@gmail.com', bcrypt.generate_password_hash('Password123').decode('utf-8'), "https://media1.popsugar-assets.com/files/thumbor/N0egfqpjMf7-MrWXkEZctPOIhQI/fit-in/728xorig/filters:format_auto-!!-:strip_icc-!!-/2020/05/13/821/n/1922398/4067f60e5ebc3fdc88b145.72337155_/i/how-many-times-has-dennis-rodman-been-married.jpg")
        rob = Investor('Rob Jones', 'RobJones', 'robjones@gmail.com', bcrypt.generate_password_hash('Password123').decode('utf-8'), "https://www.smashbros.com/assets_v2/img/fighter/rob/main.png")

        Investors.append(tim)
        Investors.append(bob)
        Investors.append(jacky)
        Investors.append(abraham)
        Investors.append(carlos)
        Investors.append(freddy)
        Investors.append(sandy)
        Investors.append(jennifer)
        Investors.append(dennis)
        Investors.append(rob)
        db.session.add_all(Investors)
        db.session.commit()

        Companies = []
        mcdonalds = Company('McDonalds', 'mcdonalds@gmail.com', bcrypt.generate_password_hash('Password123').decode('utf-8'), 211.94, "https://image.cnbcfm.com/api/v1/image/107180422-1674061950534-gettyimages-1285446341-dsc_2675_20201113110927535.jpeg?v=1680474077&w=1920&h=1080")
        burger_king = Company('Burger King', 'bking@gmail.com', bcrypt.generate_password_hash('Password123').decode('utf-8'), 4.94, "https://cdn.vox-cdn.com/thumbor/-IGirKOhzc8K4Gb4_xVpk3wM-kA=/0x0:1024x546/1200x800/filters:focal(431x192:593x354)/cdn.vox-cdn.com/uploads/chorus_image/image/54743759/13915326878_49bd04626f_b.0.0.0.jpg")
        taco_bell = Company('Taco Bell', 'tbell@gmail.com', bcrypt.generate_password_hash('Password123').decode('utf-8'), 3.1, "https://www.allrecipes.com/thmb/95Bm-8ifb1f7ZL4FVLg5OX_C6P4=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/taco-bell-storefront-purple-boarder-3x2-1-ac2942ad32b94c9b94afd5b1895e9496.png")
        wendys = Company('Wendys', 'wendy@gmail.com', bcrypt.generate_password_hash('Password123').decode('utf-8'), 4.82, "https://www.eatthis.com/wp-content/uploads/sites/4/2021/12/wendys.jpg?quality=82&strip=1")
        kfc = Company('Kentucky Fried Chicken', 'kfc@gmail.com', bcrypt.generate_password_hash('Password123').decode('utf-8'), 5.4, "https://www.eatthis.com/wp-content/uploads/sites/4/2019/05/kfc-restaurant-exterior.jpg?quality=82&strip=1")
        sonic = Company('Sonics', 'sonic@gmail.com', bcrypt.generate_password_hash('Password123').decode('utf-8'), 2.3, "https://media.timeout.com/images/105755552/image.jpg")
        arbys = Company('Arbys', 'arby@gmail.com', bcrypt.generate_password_hash('Password123').decode('utf-8'), 1.7, "https://drmarbys.com/wp-content/uploads/2020/07/8519.jpg")
        pizza_hut = Company('Pizza Hut', 'phut@gmail.com', bcrypt.generate_password_hash('Password123').decode('utf-8'), 8.5, "https://townsquare.media/site/10/files/2019/08/RS25986_GettyImages-1022603718-scr.jpg?w=980&q=75")
        dominos = Company('Dominos', 'domino@gmail.com', bcrypt.generate_password_hash('Password123').decode('utf-8'), 10.97, "https://table.skift.com/wp-content/uploads/2019/01/2_Dominos-Store_Eugene-OR-e1546984571327-800x400.jpg")
        subway = Company('Subway', 'subway@gmail.com', bcrypt.generate_password_hash('Password123').decode('utf-8'), 10.2, "https://thumbs.dreamstime.com/z/small-subway-restaurant-27982277.jpg")

        Companies.append(mcdonalds)
        Companies.append(burger_king)
        Companies.append(taco_bell)
        Companies.append(wendys)
        Companies.append(kfc)
        Companies.append(sonic)
        Companies.append(arbys)
        Companies.append(pizza_hut)
        Companies.append(dominos)
        Companies.append(subway)
        db.session.add_all(Companies)
        db.session.commit()

        # Messages = []
        # msg1 = Message('Hi', True, '1', '1')
        # msg2 = Message('Hi', True, '1', '2')
        # msg3 = Message('Hi', True, '1', '3')
        # msg4 = Message('Hi', True, '1', '4')
        # msg5 = Message('Hi', True, '1', '5')
        # msg6 = Message('Hi', True, '2', '1')
        # msg7 = Message('McDs Test', False, '1', '1')
        # msg8 = Message('McDs Test', False, '1', '1')

        # Messages.append(msg1)
        # Messages.append(msg2)
        # Messages.append(msg3)
        # Messages.append(msg4)
        # Messages.append(msg5)
        # Messages.append(msg6)
        # Messages.append(msg7)
        # Messages.append(msg8)
        # db.session.add_all(Messages)
        # db.session.commit()







