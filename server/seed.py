from app import app
from models import db, Investor, Message, Company
# from faker import Faker

# fake = Faker()

if __name__ == '__main__':
    with app.app_context():

        Investor.query.delete()
        Company.query.delete()
        Message.query.delete()

        Investors = []
        tim = Investor('Tim Charles', 'TimmyTom', 'timothy_charles@gmail.com', 'password123')
        bob = Investor('Bob Anthony', 'Anthonyb', 'bobAnthony@gmail.com', 'password123')
        jacky = Investor('Jacky Gell', 'JackyGeller', 'jacksgells@gmail.com', 'password123')
        abraham = Investor('Abraham Shalom', 'Abe', 'abe_shalom@gmail.com', 'password123')
        carlos = Investor('Carlos Smith', 'Carlos_Smith', 'carlos_SMITH@gmail.com', 'password123')
        freddy = Investor('Freddy Jenkins', 'JenkinsFreddy', 'fJenkins@gmail.com', 'password123')
        sandy = Investor('Sandy Cheeks', 'SandyC', 'sandycheeks@gmail.com', 'password123')
        jennifer = Investor('Jennifer Bruno', 'JenB', 'jenB@gmail.com', 'password123')
        dennise = Investor('Dennise Bruno', 'DeeBruno', 'dennise@gmail.com', 'password123')
        robert = Investor('Robert Jones', 'RobJones', 'robertjones@gmail.com', 'password123')

        Investors.append(tim)
        Investors.append(bob)
        Investors.append(jacky)
        Investors.append(abraham)
        Investors.append(carlos)
        Investors.append(freddy)
        Investors.append(sandy)
        Investors.append(jennifer)
        Investors.append(dennise)
        Investors.append(robert)
        db.session.add_all(Investors)
        db.session.commit()

        Companies = []
        mcdonalds = Company('McDonalds', 'mcdonalds@gmail.com', 'password123')
        burger_king = Company('Burger King', 'bking@gmail.com', 'password123')
        wendys = Company('Wendys', 'wendy@gmail.com', 'password123')
        kfc = Company('Kentucky Fried Chicken', 'kfc@gmail.com', 'password123')
        taco_bell = Company('Taco Bell', 'tbell@gmail.com', 'password123')
        sonic = Company('Sonics', 'sonic@gmail.com', 'password123')
        arbys = Company('Arbys', 'arby@gmail.com', 'password123')
        pizza_hut = Company('Pizza Hut', 'phut@gmail.com', 'password123')
        dominos = Company('Dominos', 'domino@gmail.com', 'password123')
        subway = Company('Subway', 'subway@gmail.com', 'password123')

        Companies.append(mcdonalds)
        Companies.append(burger_king)
        Companies.append(wendys)
        Companies.append(kfc)
        Companies.append(taco_bell)
        Companies.append(sonic)
        Companies.append(arbys)
        Companies.append(pizza_hut)
        Companies.append(dominos)
        Companies.append(subway)
        db.session.add_all(Companies)
        db.session.commit()







