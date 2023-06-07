from flask_sqlalchemy import SQLAlchemy
from sqlalchemy.orm import validates
from sqlalchemy.ext.associationproxy import association_proxy

db = SQLAlchemy()


class Investor(db.Model):
    __tablename__ = 'investors'
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String, nullable=False)
    username = db.Column(db.String, nullable=False, unique=True)
    email = db.Column(db.String, nullable=False, unique=True)
    password = db.Column(db.String, nullable=False)
    profile_pic = db.Column(db.String)
    created_at = db.Column(db.DateTime, server_default=db.func.now())
    updated_at = db.Column(db.DateTime, onupdate=db.func.now())

    messages = db.relationship("Message", backref = "investor")
    companies = association_proxy("messages", "company")

    def __init__(self, name, username, email, password, profile_pic, id = None):
        self.name = name
        self.username = username
        self.email = email
        self.password = password
        self.profile_pic = profile_pic
        self.id = id

    def __repr__(self):
        return f'<Investor id={self.id} name={self.name} username={self.username} password={self.password} profile_pic={self.profile_pic}>'

    def to_dict(self):
        return {
            "id" : self.id, 
            "name" : self.name, 
            "username" : self.username, 
            "email" : self.email, 
            "password" : self.password, 
            "profile_pic" : self.profile_pic, 

        }
    

class Message(db.Model):
    __tablename__ = 'messages'
    id = db.Column(db.Integer, primary_key=True)
    text = db.Column(db.String, nullable=False)
    sent_by_user = db.Column(db.Boolean, nullable=False)
    investor_id = db.Column(db.Integer, db.ForeignKey('investors.id'), nullable=False)
    company_id = db.Column(db.Integer, db.ForeignKey('companies.id'), nullable=False)
    created_at = db.Column(db.DateTime, server_default=db.func.now())

    def __init__(self, text, sent_by_user, investor_id, company_id, id = None):
        self.text = text
        self.sent_by_user = sent_by_user
        self.investor_id = investor_id
        self.company_id = company_id
        self.id = id

    def __repr__(self):
        return f'<Message id={self.id} text={self.text} sent_by_user={self.sent_by_user} investor_id={self.investor.id} investor_pic={self.investor.profile_pic} company_id={self.company_id} company_pic={self.company.pic1} >'

    def to_dict(self):
        return {
            "id" : self.id, 
            "text" : self.text, 
            "sent_by_user" : self.sent_by_user,
            "investor" : self.investor.name, 
            "investor_pic" : self.investor.profile_pic, 
            "investor_id" : self.investor.id, 
            "company" : self.company.name, 
            "company_id" : self.company.id, 
            "company_pic" : self.company.pic1, 

        }
    

class Company(db.Model):
    __tablename__ = 'companies'
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String, nullable=False, unique=True)
    email = db.Column(db.String, nullable=False, unique=True)
    password = db.Column(db.String, nullable=False)
    worth = db.Column(db.Float)
    pic1 = db.Column(db.String)
    profile_pic = db.Column(db.String)
    pic2 = db.Column(db.String)
    pic3 = db.Column(db.String)
    pic4 = db.Column(db.String)
    pic5 = db.Column(db.String)
    created_at = db.Column(db.DateTime, server_default=db.func.now())
    updated_at = db.Column(db.DateTime, onupdate=db.func.now())

    messages = db.relationship("Message", backref = "company")
    investors = association_proxy("messages", "investor")

    def __init__(self, name, email, password, worth, pic1, id = None):
        self.name = name
        self.email = email
        self.password = password
        self.worth = worth
        self.pic1 = pic1
        self.id = id

    def __repr__(self):
        return f'<Company id={self.id} name={self.name} email={self.email} password={self.password} worth={self.worth} pic1={self.pic1}>'


    def to_dict(self):
        return {
            "id" : self.id, 
            "name" : self.name,  
            "email" : self.email, 
            "password" : self.password, 
            "worth" : self.worth, 
            "pic1" : self.pic1, 

        }