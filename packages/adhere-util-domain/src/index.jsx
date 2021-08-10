import Domain from './index.ts';

console.log(Domain);

const d = Domain.create();

d.on('error', (e) => {
  console.log(e);
});

// d.run( () => {
//   fun1();
// });

function fun() {
  return new Promise(d.bind(resolve => {
    fun2();
  }));
}

fun();
