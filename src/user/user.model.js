import mongoose,{Schema} from "mongoose"
import bcrypt from "bcrypt";
export const userSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: [true, "You need to provide a username"],
            unique: true,
            validate: [],
            sparse: true,
        },
        email: {
            type: String,
            required: [true, "You need to provide a email"],
            unique: true,
        },
        password: {
            type: String,
            required: [true, "You need to provide a password"],
            validate: [],
        },
    },
    { timestamps: true }
)

userSchema.pre("save", function (next) {
    if (!this.isModified("password")) {
      return next();
    }
    bcrypt.hash(this.password, 10, (err, hash) => {
      if (err) {
        console.error("In pre");
      }
      this.password = hash;
      next();
    });
  });

  const User = mongoose.model("user", userSchema);

  export default User 