### Access Modifiers in TypeScript
When We build classes, we may need to control who see or change data inside them
for Security reason. And this behavior is called encapsulation. Typescript provides access modifiers to help us do this: public, private, protected and readonly.

To explain them, public can be accessed from anywhere, and it is the access modifier default. W private can only be accessed inside its own class. on the other hand, protected works like private, but child classes can also access it. Finally readonly means that after you set a value, you can read it but can not change it.

here is an example:
```typescript
class User {
public readonly id: number;
protected role: string;
private password: string;

constructor(id: number, role: string, password: string) {
this.id = id;
this.role = role;
this.password = password;
}
}

class Admin extends User {
showRole() {
return this.role;
}
}
```
in the example above, id can read from anywhere but can not be changed after initialization. admin class can access role because it is protected. However, as we can see password stay private inside User because it is private, so no outside code can access it directly. Typescript will show an error if someone try to access it.

in consolation, we can say that modifiers make our code easier to understand and help protect data. Using them properly we can makes our classes more reliable and easier to maintain.
