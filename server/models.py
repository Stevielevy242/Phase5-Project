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

    def __init__(self, name, username, email, password, id = None):
        self.name = name
        self.username = username
        self.email = email
        self.password = password
        self.id = id

    def to_dict(self):
        return {
            "id" : self.id, 
            "name" : self.name, 
            "username" : self.username, 
            "email" : self.email, 
            "password" : self.password, 

        }
    

class Message(db.Model):
    __tablename__ = 'messages'
    id = db.Column(db.Integer, primary_key=True)
    text = db.Column(db.String, nullable=False)
    investor_id = db.Column(db.Integer, db.ForeignKey('investors.id'), nullable=False)
    company_id = db.Column(db.Integer, db.ForeignKey('companies.id'), nullable=False)
    created_at = db.Column(db.DateTime, server_default=db.func.now())

    def __init__(self, text, investor_id, company_id, id = None):
        self.text = text
        self.investor_id = investor_id
        self.company_id = company_id
        self.id = id

    def to_dict(self):
        return {
            "id" : self.id, 
            "text" : self.text, 
            "investor" : self.investor.name, 
            "company" : self.company.name, 

        }
    

class Company(db.Model):
    __tablename__ = 'companies'
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String, nullable=False, unique=True)
    email = db.Column(db.String, nullable=False, unique=True)
    password = db.Column(db.String, nullable=False)
    profile_pic = db.Column(db.String)
    pic1 = db.Column(db.String)
    pic2 = db.Column(db.String)
    pic3 = db.Column(db.String)
    pic4 = db.Column(db.String)
    pic5 = db.Column(db.String)
    created_at = db.Column(db.DateTime, server_default=db.func.now())
    updated_at = db.Column(db.DateTime, onupdate=db.func.now())

    messages = db.relationship("Message", backref = "company")
    investors = association_proxy("messages", "investor")

    def __init__(self, name, email, password, id = None):
        self.name = name
        self.email = email
        self.password = password
        self.id = id

    def to_dict(self):
        return {
            "id" : self.id, 
            "name" : self.name,  
            "email" : self.email, 
            "password" : self.password, 

        }