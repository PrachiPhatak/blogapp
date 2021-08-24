USE blog_db;

#TRUNCATE post_category;
DELETE  from post_category where 1=1;

#TRUNCATE categories;
DELETE  from categories where 1=1;

#TRUNCATE posts;
DELETE  from posts where 1=1;

#TRUNCATE users;
DELETE  from users where 1=1;

INSERT INTO users (id,email, password, role, user_name)
VALUES (1,'admin@codeup.com', 'admin', 'USER', 'admin'),
       (2,'casey@codeup.com', 'coda', 'USER', 'Casey'),
       (3,'prachi@codeup.com', 'prachi', 'USER', 'Prachi'),
       (4,'laura@codeup.com', 'laura', 'USER', 'Laura'),
       (5,'jordy@codeup.com', 'jordy', 'USER', 'Jordy'),
       (6,'candra@codeup.com', 'candra', 'USER', 'Candra');

INSERT INTO blog_db.posts (id,title, content, user_id)
VALUES
(1,'Spring by Casey', 'u1-post1-cat1,3', 1),
(2,'Hibernate by Casey', 'This is the blog content', 1),
(3,'UI by Laura', 'This is the blog content', 4),
(4,'Resume writing by Candra', 'This is the blog content', 6),
(5,'LinkedIn by Candra', 'This is the blog content', 6),
(6,'Interview by Jordy', 'This is the blog content', 5);

INSERT INTO blog_db.categories (id,name)
VALUES
(1,'Spring'),#1
(2,'Hibernate'),#2
(3,'Java'),#3
(4,'JS'),#4
(5,'HTML'),#5
(6,'CSS'),#6
(7,'Spring'),#7
(8,'Github'),#8
(9,'Resume'),#9
(10,'Interview')#10
;

INSERT INTO blog_db.post_category (post_id, category_id)
VALUES
(1, 1),
(1, 3),
(2, 2),
(2, 3),
(4, 9),
(4, 10),
(6,1),
(6,2),
(6,3),
(6,4);