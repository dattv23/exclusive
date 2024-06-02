//package com.backend.exclusive.repositories.Implements;
//
//import com.backend.exclusive.models.User;
//import com.backend.exclusive.repositories.UserRepository;
//import com.mongodb.ReadConcern;
//import com.mongodb.ReadPreference;
//import com.mongodb.TransactionOptions;
//import com.mongodb.WriteConcern;
//import com.mongodb.client.ClientSession;
//import com.mongodb.client.MongoClient;
//import com.mongodb.client.MongoCollection;
//import com.mongodb.client.model.FindOneAndReplaceOptions;
//import com.mongodb.client.model.ReplaceOneModel;
//import jakarta.annotation.PostConstruct;
//import org.bson.BsonDocument;
//import org.bson.types.ObjectId;
//import org.springframework.stereotype.Repository;
//
//import java.util.ArrayList;
//import java.util.List;
//
//import static com.mongodb.client.model.Filters.eq;
//import static com.mongodb.client.model.Filters.in;
//import static com.mongodb.client.model.ReturnDocument.AFTER;
//
//@Repository
//public abstract class UserRepositoryImpl implements UserRepository {
//    static final TransactionOptions txnOptions = TransactionOptions.builder().readPreference(ReadPreference.primary()).readConcern(ReadConcern.MAJORITY).writeConcern(WriteConcern.MAJORITY).build();
//    final MongoClient client;
//    MongoCollection<User> userCollection;
//
//    public UserRepositoryImpl(MongoClient mongoClient) {
//        this.client = mongoClient;
//    }
//
//    @PostConstruct
//    void init() {
//        userCollection = client.getDatabase("exclusive").getCollection("users", User.class);
//    }
//
//    @Override
//    public User save(User user) {
//        user.setId(new ObjectId());
//        userCollection.insertOne(user);
//        return user;
//    }
//
//    @Override
//    public List<User> saveAll(List<User> userEntities) {
//        try (ClientSession clientSession = client.startSession()) {
//            return clientSession.withTransaction(() -> {
//                userEntities.forEach(user -> user.setId(new ObjectId()));
//                userCollection.insertMany(clientSession, userEntities);
//                return userEntities;
//            }, txnOptions);
//        }
//    }
//
//    @Override
//    public List<User> findAll() {
//        return userCollection.find().into(new ArrayList<>());
//    }
//
//    @Override
//    public List<User> findAll(List<String> ids) {
//        return userCollection.find(in("_id", mapToObjectIds(ids))).into(new ArrayList<>());
//    }
//
//    @Override
//    public User findOne(String id) {
//        return userCollection.find(eq("_id", new ObjectId(id))).first();
//    }
//
//    @Override
//    public long count() {
//        return userCollection.countDocuments();
//    }
//
//    @Override
//    public long delete(String id) {
//        return userCollection.deleteOne(eq("_id", new ObjectId(id))).getDeletedCount();
//    }
//
//    @Override
//    public long delete(List<String> ids) {
//        try (ClientSession clientSession = client.startSession()) {
//            return clientSession.withTransaction(() -> userCollection.deleteMany(clientSession, in("_id", mapToObjectIds(ids))).getDeletedCount(), txnOptions);
//        }
//    }
//
//    @Override
//    public long deleteAll() {
//        try (ClientSession clientSession = client.startSession()) {
//            return clientSession.withTransaction(() -> userCollection.deleteMany(clientSession, new BsonDocument()).getDeletedCount(), txnOptions);
//        }
//    }
//
//    @Override
//    public User update(User User) {
//        FindOneAndReplaceOptions options = new FindOneAndReplaceOptions().returnDocument(AFTER);
//        return userCollection.findOneAndReplace(eq("_id", User.getId()), User, options);
//    }
//
//    @Override
//    public long update(List<User> personEntities) {
//        List<ReplaceOneModel<User>> writes = personEntities.stream().map(p -> new ReplaceOneModel<>(eq("_id", p.getId()), p)).toList();
//        try (ClientSession clientSession = client.startSession()) {
//            return clientSession.withTransaction(() -> userCollection.bulkWrite(clientSession, writes).getModifiedCount(), txnOptions);
//        }
//    }
//
//    List<ObjectId> mapToObjectIds(List<String> ids) {
//        return ids.stream().map(ObjectId::new).toList();
//    }
//}
